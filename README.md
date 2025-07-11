# DontSleep

A simple and lightweight menu bar app for macOS that prevents your Mac from going to sleep or turning off the display when you need it to stay awake.

## Features

- **Sleep Prevention**: Toggle sleep prevention on/off with a single click
- **Display Sleep Prevention**: Keeps your display from turning off
- **Visual Status**: Menu bar icon changes to indicate current state
  - 🌙 Moon icon: Sleep prevention is OFF
  - ☀️ Sun icon: Sleep prevention is ON
- **Settings Window**: Configure app preferences
  - Launch at startup option
  - App information and description
- **Lightweight**: Pure menu bar app with no dock icon
- **Keyboard Shortcuts**: 
  - Settings: `Cmd+,`
  - Quit: `Cmd+Q`

## Perfect For

- **Watching videos or presentations** - Keep your screen active during long content
- **Long downloads or file transfers** - Prevent sleep during important processes
- **Monitoring processes** - Keep your Mac awake while monitoring systems
- **Keeping your screen active during work** - Prevent interruptions during focused tasks

## Installation

1. Download the latest release from the [Releases](https://github.com/your-username/DontSleep/releases) page
2. Open the `.dmg` file and drag `DontSleep.app` to your Applications folder
3. Launch DontSleep from Applications
4. The app will appear in your menu bar

## Usage

### Basic Usage
1. Click the DontSleep icon in your menu bar
2. Select "Prevent Sleep" to enable sleep prevention
3. The icon will change from 🌙 to ☀️ to indicate sleep prevention is active
4. Click "Allow Sleep" to disable sleep prevention

### Settings
1. Click the DontSleep icon in your menu bar
2. Select "Settings..." or use `Cmd+,`
3. Configure your preferences:
   - **Launch at startup**: Automatically start DontSleep when you log in
   - View app information and version

## Requirements

- macOS 13.0 or later
- Apple Silicon (M1/M2/M3) or Intel Mac

## Technical Details

DontSleep uses macOS system APIs to prevent sleep:
- `kIOPMAssertionTypeNoIdleSleep` - Prevents system sleep
- `kIOPMAssertionTypeNoDisplaySleep` - Prevents display sleep
- Uses modern `SMAppService` API for launch at startup functionality (with fallback for older macOS versions)

## Privacy

DontSleep is a local-only app that doesn't collect, store, or transmit any personal data. It only uses system APIs to manage sleep prevention states.

## Building from Source

### Prerequisites
- Xcode 15.0 or later
- macOS 13.0 or later

### Build Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DontSleep.git
   cd DontSleep
   ```

2. Open the project in Xcode:
   ```bash
   open DontSleep.xcodeproj
   ```

3. Build and run the project (`Cmd+R`)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have feature requests, please create an issue on the [GitHub Issues](https://github.com/your-username/DontSleep/issues) page.

---

**Version 1.0** - Built with Swift and SwiftUI for macOS 