# DontSleep App - Build and Distribution Guide

This guide contains all the commands needed to build and package the DontSleep macOS app into a distributable DMG file.

## Prerequisites

- macOS with Xcode installed
- Command Line Tools for Xcode
- Terminal access
- Project directory: `/Users/denispovarov/Projects/DontSleep`
- Homebrew (recommended for professional DMG creation)

## 🚀 Professional DMG Creation (New!)

**For the best user experience, use the new professional DMG installer:**

```bash
# Complete build and package in one command
./build-and-package.sh
```

This creates a professional DMG installer with:
- ✅ Applications folder shortcut
- ✅ Custom background with installation instructions  
- ✅ Proper window positioning and sizing
- ✅ Visual drag-and-drop guidance
- ✅ Professional appearance like commercial software

**The old method below is still available but creates a basic DMG that requires users to figure out installation themselves.**

## Build Commands (Basic Method)

### 1. Navigate to Project Directory
```bash
cd /Users/denispovarov/Projects/DontSleep
```

### 2. Create Build Archive
```bash
xcodebuild -scheme DontSleep -configuration Release -archivePath ./build/DontSleep.xcarchive archive
```

### 3. Extract App from Archive
```bash
mkdir -p ./build/export
cp -r ./build/DontSleep.xcarchive/Products/Applications/DontSleep.app ./build/export/
```

### 4. Create DMG File
```bash
hdiutil create -volname "DontSleep" -srcfolder ./build/export/DontSleep.app -ov -format UDZO ./build/export/DontSleep.dmg
```

### 5. Verify Build Results
```bash
ls -lah ./build/export/
```

## Complete Build Script

You can also run all commands in sequence:

```bash
#!/bin/bash
# DontSleep Build Script

# Set working directory
cd /Users/denispovarov/Projects/DontSleep

# Clean previous builds (optional)
rm -rf ./build

# Create archive
echo "Creating archive..."
xcodebuild -scheme DontSleep -configuration Release -archivePath ./build/DontSleep.xcarchive archive

# Extract app
echo "Extracting app..."
mkdir -p ./build/export
cp -r ./build/DontSleep.xcarchive/Products/Applications/DontSleep.app ./build/export/

# Create DMG
echo "Creating DMG..."
hdiutil create -volname "DontSleep" -srcfolder ./build/export/DontSleep.app -ov -format UDZO ./build/export/DontSleep.dmg

# Show results
echo "Build complete!"
ls -lah ./build/export/
```

## Alternative: Professional Export (Requires Apple Developer Account)

If you have an Apple Developer account and want to create a properly signed build:

### Export with Developer ID
```bash
# Create export options plist
cat > ./export-options.plist << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>method</key>
    <string>developer-id</string>
    <key>teamID</key>
    <string>YOUR_TEAM_ID</string>
    <key>signingStyle</key>
    <string>automatic</string>
    <key>stripSwiftSymbols</key>
    <true/>
    <key>generateAppStoreInformation</key>
    <false/>
</dict>
</plist>
EOF

# Export archive
xcodebuild -exportArchive -archivePath ./build/DontSleep.xcarchive -exportPath ./build/export -exportOptionsPlist ./export-options.plist
```

## Professional DMG Installer (Recommended)

For a much better user experience, use the professional DMG installer that guides users through the installation process:

### Quick Start - One Command Build
```bash
chmod +x ./build-and-package.sh
./build-and-package.sh
```

This will:
- Build the app
- Create a professional DMG installer with background image
- Show Applications folder shortcut 
- Provide visual installation guidance

### Manual Professional DMG Creation

If you already have the app built and want to create just the DMG:

```bash
chmod +x ./create-dmg.sh
./create-dmg.sh
```

### Features of Professional DMG
- **Custom background image** with installation instructions
- **Applications folder shortcut** - users can easily drag and drop
- **Proper window sizing** and positioning
- **App icon positioning** for intuitive installation
- **Visual cues** guiding users through the process
- **Professional appearance** similar to commercial software

### Customizing the Background Image

To create a custom background image:
1. Create an 800x400 pixel image
2. Add your app icon on the left side
3. Add Applications folder icon on the right side  
4. Include an arrow pointing from left to right
5. Add text like "Drag DontSleep to Applications"
6. Save as `assets/dmg/dmg-background.png`

### Advanced DMG Creation (Alternative)

For manual control with create-dmg tool:

```bash
# Install create-dmg if not already installed
brew install create-dmg

# Create custom DMG
create-dmg \
  --volname "DontSleep Installer" \
  --window-pos 200 120 \
  --window-size 800 400 \
  --icon-size 100 \
  --app-drop-link 600 185 \
  --background "./assets/dmg-background.png" \
  ./build/export/DontSleep-Professional.dmg \
  ./build/export/DontSleep.app
```

## Testing the Build

### Test the App
```bash
# Test the built app
open ./build/export/DontSleep.app

# Test the DMG
open ./build/export/DontSleep.dmg
```

### Verify App Signature
```bash
codesign -dv --verbose=4 ./build/export/DontSleep.app
```

## Build Outputs

After successful build, you'll have:

- **`./build/DontSleep.xcarchive`** - Xcode archive (for future exports)
- **`./build/export/DontSleep.app`** - Standalone app bundle
- **`./build/export/DontSleep.dmg`** - DMG installer (ready for distribution)

## File Sizes

Typical file sizes:
- **App bundle**: ~2-3 MB
- **DMG file**: ~56 KB (compressed)

## Distribution Notes

### For Personal/Development Use
- Use the DMG created with basic commands above
- No code signing required for personal use
- Users may see "Unknown Developer" warning

### For Public Distribution
- Requires Apple Developer Account ($99/year)
- Code signing with Developer ID certificate
- Notarization recommended for macOS Catalina+
- Users won't see security warnings

## Troubleshooting

### Common Issues

1. **Build fails with "No Team Found"**
   - Use the direct extract method instead of export
   - Or add a valid Team ID to export options

2. **DMG creation fails**
   - Ensure the app bundle exists
   - Check disk space availability

3. **App won't run after distribution**
   - Verify app bundle structure
   - Check code signing status

### Build Logs
Build logs are saved in:
```
~/Library/Developer/Xcode/DerivedData/DontSleep-*/Build/
```

## Quick Reference

**Professional DMG Installer (Recommended):**
```bash
cd /Users/denispovarov/Projects/DontSleep && chmod +x ./build-and-package.sh && ./build-and-package.sh
```

**Just create professional DMG (app already built):**
```bash
cd /Users/denispovarov/Projects/DontSleep && chmod +x ./create-dmg.sh && ./create-dmg.sh
```

**Basic DMG (old method):**
```bash
cd /Users/denispovarov/Projects/DontSleep && xcodebuild -scheme DontSleep -configuration Release -archivePath ./build/DontSleep.xcarchive archive && mkdir -p ./build/export && cp -r ./build/DontSleep.xcarchive/Products/Applications/DontSleep.app ./build/export/ && hdiutil create -volname "DontSleep" -srcfolder ./build/export/DontSleep.app -ov -format UDZO ./build/export/DontSleep.dmg && echo "Build complete! DMG created at ./build/export/DontSleep.dmg"
```

---

**Last Updated**: July 11, 2025  
**Xcode Version**: 16.4  
**macOS Target**: 15.5+ 