#!/bin/bash

# Complete Build and Package Script for DontSleep
# This script builds the app and creates a professional DMG installer

set -e  # Exit on any error

echo "🚀 DontSleep - Complete Build and Package Process"
echo "================================================="

# Configuration
PROJECT_DIR="/Users/denispovarov/Projects/DontSleep"
SCHEME="DontSleep"
CONFIGURATION="Release"
ARCHIVE_PATH="./build/DontSleep.xcarchive"
EXPORT_DIR="./build/export"

# Step 1: Navigate to project directory
echo "📁 Navigating to project directory..."
cd "$PROJECT_DIR"

# Step 2: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf ./build

# Step 3: Build the app archive
echo "🔨 Building app archive..."
xcodebuild -scheme "$SCHEME" -configuration "$CONFIGURATION" -archivePath "$ARCHIVE_PATH" archive

if [ ! -d "$ARCHIVE_PATH" ]; then
    echo "❌ Error: Failed to create archive"
    exit 1
fi

echo "✅ Archive created successfully"

# Step 4: Extract app from archive
echo "📦 Extracting app from archive..."
mkdir -p "$EXPORT_DIR"
cp -r "$ARCHIVE_PATH/Products/Applications/DontSleep.app" "$EXPORT_DIR/"

if [ ! -d "$EXPORT_DIR/DontSleep.app" ]; then
    echo "❌ Error: Failed to extract app"
    exit 1
fi

echo "✅ App extracted successfully"

# Step 5: Code signing (ad-hoc signing to prevent Gatekeeper issues)
echo "🔐 Applying ad-hoc code signing..."
codesign --force --deep --sign - "$EXPORT_DIR/DontSleep.app"

# Verify code signing
echo "🔍 Verifying code signature..."
codesign --verify --deep --strict "$EXPORT_DIR/DontSleep.app"
if [ $? -eq 0 ]; then
    echo "✅ Code signing successful"
else
    echo "⚠️  Code signing verification failed, but app should still work"
fi

# Step 6: Create professional DMG installer
echo "🎁 Creating professional DMG installer..."
chmod +x ./create-dmg.sh
./create-dmg.sh

# Step 7: Show final results
echo ""
echo "🎉 Build and Package Complete!"
echo "=============================="
echo "📂 Build outputs:"
ls -lah "$EXPORT_DIR/"

echo ""
echo "📋 Summary:"
echo "   • Archive: $ARCHIVE_PATH"
echo "   • App Bundle: $EXPORT_DIR/DontSleep.app"
echo "   • DMG Installer: $EXPORT_DIR/DontSleep-Installer.dmg"

echo ""
echo "🔐 Code Signing Status:"
codesign -dv --verbose=4 "$EXPORT_DIR/DontSleep.app" 2>&1 | head -5

echo ""
echo "🚀 Next steps:"
echo "   • Test the installer: open \"$EXPORT_DIR/DontSleep-Installer.dmg\""
echo "   • Share the DMG file for easy installation"
echo "   • Users should see fewer security warnings with ad-hoc signing" 