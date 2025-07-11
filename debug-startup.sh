#!/bin/bash

# DontSleep Launch at Startup Debug Script

echo "🔍 DontSleep Launch at Startup Debug"
echo "====================================="

APP_NAME="DontSleep"
BUNDLE_ID="denpo.DontSleep"
APP_PATH="/Applications/${APP_NAME}.app"

echo ""
echo "📋 Basic Information:"
echo "App Name: ${APP_NAME}"
echo "Bundle ID: ${BUNDLE_ID}"
echo "Expected App Path: ${APP_PATH}"

echo ""
echo "🔍 Checking if app is installed:"
if [ -d "${APP_PATH}" ]; then
    echo "✅ App found at: ${APP_PATH}"
    
    # Check app bundle info
    echo ""
    echo "📦 App Bundle Information:"
    /usr/libexec/PlistBuddy -c "Print CFBundleIdentifier" "${APP_PATH}/Contents/Info.plist" 2>/dev/null || echo "❌ Could not read bundle identifier"
    /usr/libexec/PlistBuddy -c "Print CFBundleVersion" "${APP_PATH}/Contents/Info.plist" 2>/dev/null || echo "❌ Could not read bundle version"
    
    # Check if sandboxed
    echo ""
    echo "🔒 Security Information:"
    if [ -f "${APP_PATH}/Contents/MacOS/DontSleep" ]; then
        echo "Checking code signature and entitlements..."
        codesign -dv "${APP_PATH}" 2>&1 | grep -i "sandbox\|entitlements" || echo "No specific security info found"
        
        echo ""
        echo "Entitlements:"
        codesign -d --entitlements - "${APP_PATH}" 2>/dev/null || echo "❌ Could not read entitlements"
    fi
else
    echo "❌ App not found at: ${APP_PATH}"
    echo "   The app must be installed in /Applications for launch at startup to work"
    echo "   Currently installed at: $(find /Applications -name "${APP_NAME}.app" -type d 2>/dev/null || echo "Not found")"
fi

echo ""
echo "🎯 Login Items Status:"
echo "Checking macOS Login Items..."

# Check using sfltool (macOS 13+)
if command -v sfltool &> /dev/null; then
    echo ""
    echo "📱 Service Management Status (macOS 13+):"
    sfltool list-login-items 2>/dev/null | grep -i "${BUNDLE_ID}" || echo "❌ No login items found for ${BUNDLE_ID}"
    
    echo ""
    echo "All registered login items:"
    sfltool list-login-items 2>/dev/null | head -20
fi

echo ""
echo "🔧 System Login Items:"
echo "Checking System Preferences > Users & Groups > Login Items..."

# Check LaunchAgents
echo ""
echo "🚀 Launch Agents:"
LAUNCH_AGENTS_USER="~/Library/LaunchAgents"
LAUNCH_AGENTS_SYSTEM="/Library/LaunchAgents"

echo "User LaunchAgents directory: ${LAUNCH_AGENTS_USER}"
ls -la ~/Library/LaunchAgents/ 2>/dev/null | grep -i "${BUNDLE_ID}" || echo "❌ No launch agents found for ${BUNDLE_ID}"

echo ""
echo "System LaunchAgents directory: ${LAUNCH_AGENTS_SYSTEM}"
ls -la /Library/LaunchAgents/ 2>/dev/null | grep -i "${BUNDLE_ID}" || echo "❌ No system launch agents found for ${BUNDLE_ID}"

echo ""
echo "📊 Recommendations:"
echo "=================="

if [ ! -d "${APP_PATH}" ]; then
    echo "❌ CRITICAL: App must be installed in /Applications for launch at startup to work"
    echo "   Please install the app to /Applications"
fi

echo ""
echo "🔧 Potential Solutions:"
echo "1. Update app entitlements to include launch at startup permissions"
echo "2. Remove sandboxing if not needed for App Store distribution"
echo "3. Use a helper app approach for sandboxed apps"
echo "4. Check that the app is properly signed and notarized"

echo ""
echo "💡 Next Steps:"
echo "1. Install the app to /Applications if not already there"
echo "2. Run the app and check Settings > Launch at startup"
echo "3. Look for the app in System Preferences > Users & Groups > Login Items"
echo "4. Check Console.app for any Service Management errors"

echo ""
echo "🔍 To check Console logs:"
echo "open /Applications/Utilities/Console.app"
echo "Filter by 'DontSleep' or 'ServiceManagement'"

echo ""
echo "Debug complete!" 