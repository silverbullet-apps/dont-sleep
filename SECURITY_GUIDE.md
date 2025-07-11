# 🔐 macOS Security Warning - DontSleep App

## What is this warning?

When you download and try to run DontSleep on macOS, you might see a security warning like:

> **"DontSleep.app" Not Opened**  
> Apple could not verify "DontSleep.app" is free of malware that may harm your Mac or compromise your privacy.

**This is normal and expected!** This warning appears because:
- DontSleep is not signed with an Apple Developer certificate
- It's not distributed through the Mac App Store
- macOS Gatekeeper is protecting your system (which is good!)

## 🚀 How to Open DontSleep (Users)

### Method 1: Right-Click Method (Recommended)
1. **Right-click** on the DontSleep app
2. Select **"Open"** from the context menu
3. Click **"Open"** in the security dialog
4. The app will now run and be trusted for future use

### Method 2: System Preferences
1. Go to **System Preferences** → **Security & Privacy** → **General**
2. Look for a message about DontSleep being blocked
3. Click **"Open Anyway"**
4. Enter your password when prompted

### Method 3: Automated Fix Script
```bash
# Download and run the fix script
curl -O https://raw.githubusercontent.com/your-username/DontSleep/main/fix-security-warning.sh
chmod +x fix-security-warning.sh
./fix-security-warning.sh
```

### Method 4: Terminal (Advanced Users)
```bash
# Navigate to where DontSleep.app is located
cd /Applications  # or wherever you put the app

# Remove the quarantine attribute
xattr -dr com.apple.quarantine DontSleep.app

# Now you can open it normally
open DontSleep.app
```

## 🛡️ Is DontSleep Safe?

**Yes, DontSleep is safe to use!** 

- ✅ The source code is completely open and available on GitHub
- ✅ You can review every line of code before running it
- ✅ It only prevents your Mac from sleeping - no network access or data collection
- ✅ No malware, adware, or suspicious behavior
- ✅ Built with standard Apple development tools (Xcode + Swift)

The warning appears because we're an independent developer, not because the app is dangerous.

## 🔧 For Developers: Preventing This Warning

### Option 1: Ad-hoc Code Signing (Free)
The updated build script now includes ad-hoc code signing:

```bash
# This is now included in build-and-package.sh
codesign --force --deep --sign - DontSleep.app
```

This reduces (but doesn't eliminate) the security warnings.

### Option 2: Developer ID Signing ($99/year)
For commercial distribution without warnings:

1. **Join Apple Developer Program** ($99/year)
2. **Get a Developer ID certificate**
3. **Sign the app with your certificate:**
   ```bash
   codesign --force --deep --sign "Developer ID Application: Your Name" DontSleep.app
   ```
4. **Notarize the app** (optional but recommended)

### Option 3: Mac App Store Distribution
- No security warnings
- Requires Apple Developer Program membership
- Must follow App Store guidelines

## 📝 Adding to Your README

Consider adding this section to your project README:

```markdown
## 🔐 macOS Security Warning

When you first run DontSleep, macOS might show a security warning. This is normal for apps not distributed through the Mac App Store.

**To open DontSleep:**
1. Right-click on the app
2. Select "Open"
3. Click "Open" in the security dialog

The app is completely safe - you can verify this by reviewing the source code!
```

## 🎯 Best Practices for Open Source macOS Apps

1. **Always include security instructions** in your README
2. **Consider ad-hoc signing** for basic trust (included in our build script)
3. **Make source code easily accessible** for security review
4. **Use clear, descriptive commit messages** to show development history
5. **Consider GitHub releases** with signed binaries for important versions

## 💡 Alternative Distribution Methods

### Homebrew Cask
```bash
# Users can install via Homebrew (if you create a cask)
brew install --cask dontsleep
```

### Direct Download with Instructions
- Host the DMG on GitHub releases
- Include clear installation instructions
- Provide screenshots of the security dialog

### Build from Source
```bash
# Users who are comfortable can build from source
git clone https://github.com/yourusername/DontSleep.git
cd DontSleep
./build-and-package.sh
```

## 📞 Support for Users

If users have trouble with the security warning:

1. **Point them to this guide**
2. **Offer to help via GitHub issues**
3. **Consider providing a video tutorial**
4. **Explain why the warning appears** (builds trust)

---

**Remember:** The security warning is actually a good thing - it means macOS is protecting users. By providing clear instructions, we help users make informed decisions about running our software. 