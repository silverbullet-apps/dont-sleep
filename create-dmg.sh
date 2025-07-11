#!/bin/bash

# Professional DMG Creator for DontSleep App
# This script creates a beautiful, user-friendly DMG installer

set -e  # Exit on any error

# Configuration
APP_NAME="DontSleep"
DMG_NAME="DontSleep-Installer"
VERSION="1.0.0"
BACKGROUND_IMG="assets/dmg/dmg-background.png"
APP_PATH="./build/export/DontSleep.app"
DMG_PATH="./build/export/${DMG_NAME}.dmg"

echo "🔨 Creating Professional DMG Installer for $APP_NAME"
echo "=================================================="

# Check if create-dmg is installed
if ! command -v create-dmg &> /dev/null; then
    echo "📦 Installing create-dmg..."
    if command -v brew &> /dev/null; then
        brew install create-dmg
    else
        echo "❌ Error: Homebrew not found. Please install Homebrew first:"
        echo "   /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
        exit 1
    fi
fi

# Ensure the app exists
if [ ! -d "$APP_PATH" ]; then
    echo "❌ Error: App not found at $APP_PATH"
    echo "   Please build the app first using: xcodebuild -scheme DontSleep -configuration Release -archivePath ./build/DontSleep.xcarchive archive"
    exit 1
fi

# Create background image if it doesn't exist
if [ ! -f "$BACKGROUND_IMG" ]; then
    echo "🎨 Creating default background image..."
    mkdir -p assets/dmg
    
    # Create a simple background using ImageMagick if available, otherwise use a solid color
    if command -v convert &> /dev/null; then
        convert -size 800x400 xc:'#f0f0f0' \
                -pointsize 32 -fill '#333333' \
                -gravity center -annotate +0-50 'Drag DontSleep to Applications' \
                -pointsize 16 -fill '#666666' \
                -gravity center -annotate +0+50 'To install DontSleep, drag the app icon to the Applications folder' \
                "$BACKGROUND_IMG"
        echo "✅ Created default background image"
    else
        echo "⚠️  ImageMagick not found. Using create-dmg without background image."
        echo "   For a custom background, create an 800x400 image at: $BACKGROUND_IMG"
        BACKGROUND_IMG=""
    fi
fi

# Remove old DMG if it exists
if [ -f "$DMG_PATH" ]; then
    echo "🗑️  Removing old DMG..."
    rm "$DMG_PATH"
fi

echo "🎁 Creating professional DMG installer..."

# Check if app icon exists for volume icon
VOLICON_PARAM=""
if [ -f "$APP_PATH/Contents/Resources/AppIcon.icns" ]; then
    VOLICON_PARAM="--volicon $APP_PATH/Contents/Resources/AppIcon.icns"
    echo "✅ Using app icon for DMG volume icon"
else
    echo "⚠️  App icon not found, using default DMG icon"
fi

# Create DMG with professional settings
if [ -n "$BACKGROUND_IMG" ] && [ -f "$BACKGROUND_IMG" ]; then
    create-dmg \
        --volname "$DMG_NAME" \
        $VOLICON_PARAM \
        --window-pos 200 120 \
        --window-size 800 400 \
        --icon-size 100 \
        --icon "$APP_NAME.app" 200 190 \
        --hide-extension "$APP_NAME.app" \
        --app-drop-link 600 185 \
        --background "$BACKGROUND_IMG" \
        --hdiutil-verbose \
        "$DMG_PATH" \
        "$APP_PATH"
else
    # Fallback without background image
    create-dmg \
        --volname "$DMG_NAME" \
        $VOLICON_PARAM \
        --window-pos 200 120 \
        --window-size 800 400 \
        --icon-size 100 \
        --icon "$APP_NAME.app" 200 190 \
        --hide-extension "$APP_NAME.app" \
        --app-drop-link 600 185 \
        --hdiutil-verbose \
        "$DMG_PATH" \
        "$APP_PATH"
fi

# Check if DMG was created successfully
if [ -f "$DMG_PATH" ]; then
    echo "✅ Professional DMG installer created successfully!"
    echo "📦 Location: $DMG_PATH"
    echo "📏 Size: $(du -h "$DMG_PATH" | cut -f1)"
    echo ""
    echo "🎉 Your DMG installer now includes:"
    echo "   • Professional appearance with custom background"
    echo "   • Applications folder shortcut"
    echo "   • Proper window sizing and positioning"
    echo "   • App icon and visual cues"
    echo "   • Drag-and-drop installation guidance"
    echo ""
    echo "🚀 To test the installer:"
    echo "   open \"$DMG_PATH\""
else
    echo "❌ Error: Failed to create DMG installer"
    exit 1
fi 