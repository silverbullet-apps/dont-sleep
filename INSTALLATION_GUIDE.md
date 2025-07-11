# 🚀 DontSleep Installation Guide

## Step 1: Download and Install
1. Download `DontSleep-Installer.dmg` from [GitHub Releases](https://github.com/your-username/DontSleep/releases)
2. Open the DMG file
3. Drag `DontSleep.app` to your Applications folder
4. Eject the DMG

## Step 2: Handle macOS Security Warning

When you try to open DontSleep, you'll see a security warning. **This is normal!**

### 🎯 **Quick Fix (30 seconds)**

**Option 1: Terminal Command (Most Reliable)**
```bash
xattr -dr com.apple.quarantine /Applications/DontSleep.app
```

**Option 2: Right-Click Method (Sometimes Works)**
1. Right-click on DontSleep.app
2. Select "Open"
3. Click "Open" in the dialog

### 🔧 **If You Installed Elsewhere**

**Desktop:**
```bash
xattr -dr com.apple.quarantine ~/Desktop/DontSleep.app
```

**Downloads folder:**
```bash
xattr -dr com.apple.quarantine ~/Downloads/DontSleep.app
```

**Custom location:**
```bash
# Replace /path/to/ with your actual path
xattr -dr com.apple.quarantine /path/to/DontSleep.app
```

### 🛠️ **If You Get Permission Errors**

```bash
# Add sudo if you get "permission denied"
sudo xattr -dr com.apple.quarantine /Applications/DontSleep.app
```

### 🤖 **Automated Fix Script**

Download and run our fix script:
```bash
curl -O https://raw.githubusercontent.com/your-username/DontSleep/main/fix-security-warning.sh
chmod +x fix-security-warning.sh
./fix-security-warning.sh
```

## Step 3: Launch DontSleep
1. Double-click DontSleep.app or open it from Applications
2. Look for the DontSleep icon in your menu bar (🌙 or ☀️)
3. Click the icon to toggle sleep prevention

## ❓ **Why This Security Warning?**

- DontSleep is **completely safe** - all source code is public
- The warning appears because we're not paying Apple $99/year for a certificate
- This is **normal for open-source apps**
- Once you bypass it once, it never appears again

## 🆘 **Still Having Issues?**

1. **App won't open after fix:**
   ```bash
   # Check if it has the quarantine attribute
   xattr -l /Applications/DontSleep.app
   
   # If you see com.apple.quarantine, remove it
   xattr -dr com.apple.quarantine /Applications/DontSleep.app
   ```

2. **No menu bar icon:**
   - Check if the app is actually running: `ps aux | grep DontSleep`
   - Try quitting and reopening the app

3. **Permission issues:**
   - Make sure you have admin rights on your Mac
   - Try using `sudo` with the command

4. **Other problems:**
   - [Open an issue on GitHub](https://github.com/your-username/DontSleep/issues)
   - Include your macOS version and what you tried

## 💡 **Pro Tips**

- **One-time process:** Once you fix the security warning, it's fixed forever
- **Source code review:** You can verify the app's safety by checking the code on GitHub
- **Alternative:** Build from source if you're comfortable with development tools

---

**🔒 Your privacy matters:** DontSleep is local-only and doesn't collect or transmit any data. 