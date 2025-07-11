# 🚀 Quick Fix for macOS Security Warning

## The Problem
You downloaded DontSleep and got this error:
> "DontSleep.app" Not Opened - Apple could not verify...

## The Solution (30 seconds)

### Option 1: Terminal Command (Most Reliable) ✅
```bash
# Remove the quarantine attribute
xattr -dr com.apple.quarantine /Applications/DontSleep.app

# Now open it normally
open /Applications/DontSleep.app
```

### Option 2: Right-Click Method (Sometimes Works)
1. **Right-click** on DontSleep.app (don't double-click!)
2. Select **"Open"** from the menu
3. Click **"Open"** when asked
4. Done! App will work normally forever

### Option 3: Automated Script
```bash
# Navigate to where the app is located
cd /Applications  # or wherever you put DontSleep.app

# Remove the quarantine
xattr -dr com.apple.quarantine DontSleep.app

# Now open it normally
open DontSleep.app
```

## Why This Happens
- DontSleep is safe, but not signed with Apple's $99/year certificate
- This is normal for open-source apps
- The source code is fully visible on GitHub for verification

## Still Need Help?
- Check the full [SECURITY_GUIDE.md](SECURITY_GUIDE.md)
- Open an issue on GitHub
- This is a one-time process - once opened, it works forever! 