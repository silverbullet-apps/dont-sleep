#!/bin/bash

# DontSleep Security Warning Fix
# This script removes the quarantine attribute from DontSleep.app to bypass macOS security warnings

echo "🔐 DontSleep Security Warning Fix"
echo "================================="
echo ""
echo "This script will remove the quarantine attribute from DontSleep.app"
echo "to bypass macOS security warnings."
echo ""
echo "ℹ️  Note: The right-click method doesn't always work with certain"
echo "   quarantine flags. This method is more reliable."
echo ""

# Check if DontSleep.app exists in Applications
if [ -d "/Applications/DontSleep.app" ]; then
    APP_PATH="/Applications/DontSleep.app"
    echo "✅ Found DontSleep.app in Applications folder"
elif [ -d "./DontSleep.app" ]; then
    APP_PATH="./DontSleep.app"
    echo "✅ Found DontSleep.app in current directory"
else
    echo "❌ DontSleep.app not found!"
    echo ""
    echo "Please ensure DontSleep.app is in one of these locations:"
    echo "  • /Applications/DontSleep.app"
    echo "  • ./DontSleep.app (current directory)"
    echo ""
    echo "Or run this script from the directory containing DontSleep.app"
    exit 1
fi

# Check if the app has quarantine attribute
if xattr -l "$APP_PATH" 2>/dev/null | grep -q "com.apple.quarantine"; then
    echo "🔍 App has quarantine attribute - removing it..."
    
    # Remove quarantine attribute
    xattr -dr com.apple.quarantine "$APP_PATH"
    
    # Verify it was removed
    if ! xattr -l "$APP_PATH" 2>/dev/null | grep -q "com.apple.quarantine"; then
        echo "✅ Successfully removed quarantine attribute!"
        echo "🎉 You can now open DontSleep.app normally"
    else
        echo "❌ Failed to remove quarantine attribute"
        echo "💡 Try running with sudo: sudo ./fix-security-warning.sh"
        exit 1
    fi
else
    echo "✅ App doesn't have quarantine attribute - no action needed"
    echo "🎉 You should be able to open DontSleep.app normally"
fi

echo ""
echo "🚀 You can now open DontSleep by:"
echo "  • Double-clicking the app"
echo "  • Using: open '$APP_PATH'"
echo ""
echo "ℹ️  Note: This is safe to do - you can verify the app's safety by"
echo "   reviewing the source code at: https://github.com/your-username/DontSleep" 