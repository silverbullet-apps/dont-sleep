//
//  SettingsView.swift
//  DontSleep
//
//  Created by Denis Povarov on 11.07.2025.
//

import SwiftUI
import ServiceManagement

struct SettingsView: View {
    @State private var launchAtStartup = false
    @State private var isUpdatingLaunchAtStartup = false
    @State private var startWithSleepPreventionEnabled = true
    
    // Check if we're running in development mode
    private var isDevelopmentMode: Bool {
        let bundlePath = Bundle.main.bundlePath
        // Development builds are typically run from DerivedData or outside /Applications
        return !bundlePath.hasPrefix("/Applications/") || bundlePath.contains("DerivedData")
    }
    
    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                // Header
                VStack(spacing: 8) {
                    Image(systemName: "moon.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.blue)
                    
                    Text("DontSleep")
                        .font(.title)
                        .fontWeight(.medium)
                    
                    Text("Keep your Mac awake when you need it")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
                .padding(.top, 20)
                .padding(.bottom, 30)
                
                // Settings Section
                VStack(alignment: .leading, spacing: 16) {
                    Text("General")
                        .font(.headline)
                        .foregroundColor(.primary)
                    
                    // Launch at startup toggle
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Toggle("Launch at startup", isOn: $launchAtStartup)
                                .toggleStyle(SwitchToggleStyle())
                                .disabled(isUpdatingLaunchAtStartup)
                                .onChange(of: launchAtStartup) { _, newValue in
                                    setLaunchAtStartup(enabled: newValue)
                                }
                            
                            Spacer()
                            
                            if isUpdatingLaunchAtStartup {
                                ProgressView()
                                    .scaleEffect(0.5)
                                    .frame(width: 16, height: 16)
                            }
                        }
                        
                        // Development mode notice
                        if isDevelopmentMode {
                            Text("ⓘ Launch at startup may not work in development mode. Install the app to /Applications for full functionality.")
                                .font(.caption)
                                .foregroundColor(.secondary)
                                .padding(.leading, 4)
                        }
                    }
                    .padding(.vertical, 4)
                    
                    // Start with sleep prevention enabled toggle
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            Toggle("Start with sleep prevention enabled", isOn: $startWithSleepPreventionEnabled)
                                .toggleStyle(SwitchToggleStyle())
                                .onChange(of: startWithSleepPreventionEnabled) { _, newValue in
                                    UserDefaults.standard.set(newValue, forKey: "StartWithSleepPreventionEnabled")
                                }
                            
                            Spacer()
                        }
                        
                        Text("When enabled, the app will automatically prevent sleep when launched.")
                            .font(.caption)
                            .foregroundColor(.secondary)
                            .padding(.leading, 4)
                    }
                    .padding(.vertical, 4)
                    
                    Divider()
                        .padding(.vertical, 8)
                    
                    // App Description Section
                    VStack(alignment: .leading, spacing: 12) {
                        Text("About")
                            .font(.headline)
                            .foregroundColor(.primary)
                        
                        VStack(alignment: .leading, spacing: 8) {
                            Text("DontSleep is a simple menu bar app that prevents your Mac from going to sleep or turning off the display.")
                                .font(.body)
                                .foregroundColor(.secondary)
                            
                            Text("Perfect for:")
                                .font(.subheadline)
                                .fontWeight(.medium)
                            
                            VStack(alignment: .leading, spacing: 4) {
                                Text("• Watching videos or presentations")
                                Text("• Long downloads or file transfers")
                                Text("• Monitoring processes")
                                Text("• Keeping your screen active during work")
                            }
                            .font(.body)
                            .foregroundColor(.secondary)
                            .padding(.leading, 8)
                        }
                    }
                }
                .padding(.horizontal, 20)
                
                // Add some bottom padding
                Spacer()
                    .frame(height: 20)
                
                // Footer
                VStack(spacing: 8) {
                    Divider()
                    
                    HStack {
                        Text("Version 1.0")
                            .font(.footnote)
                            .foregroundColor(.secondary)
                        
                        Spacer()
                        
                        Button("Close") {
                            NSApplication.shared.keyWindow?.close()
                        }
                        .keyboardShortcut(.escape)
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 12)
                }
            }
        }
        .frame(width: 520, height: 450)
        .onAppear {
            // Check current launch at startup status
            checkLaunchAtStartupStatus()
        }
    }
    
    private func setLaunchAtStartup(enabled: Bool) {
        // Prevent multiple rapid toggles
        guard !isUpdatingLaunchAtStartup else { return }
        isUpdatingLaunchAtStartup = true
        
        let bundleIdentifier = Bundle.main.bundleIdentifier ?? "denpo.DontSleep"
        print("Attempting to \(enabled ? "enable" : "disable") launch at startup for bundle: \(bundleIdentifier)")
        
        if #available(macOS 13.0, *) {
            // For sandboxed apps, use the app itself as the login item
            let service = SMAppService.mainApp
            print("SMAppService current status: \(service.status)")
            
            do {
                if enabled {
                    try service.register()
                    print("✅ Successfully enabled launch at startup")
                } else {
                    try service.unregister()
                    print("✅ Successfully disabled launch at startup")
                }
                
                // Update UserDefaults to persist the setting
                UserDefaults.standard.set(enabled, forKey: "LaunchAtStartup")
                print("💾 Saved setting to UserDefaults: \(enabled)")
                
            } catch {
                print("❌ SMAppService failed: \(error)")
                print("📋 Error details: \(error.localizedDescription)")
                
                // For sandboxed apps, sometimes we need to use the legacy approach
                print("🔄 Falling back to legacy approach")
                let legacySuccess = SMLoginItemSetEnabled(bundleIdentifier as CFString, enabled)
                print("🏗️ Legacy SMLoginItemSetEnabled result: \(legacySuccess)")
                
                // Always save to UserDefaults for consistency
                UserDefaults.standard.set(enabled, forKey: "LaunchAtStartup")
                
                if !legacySuccess {
                    // If both modern and legacy fail, it might be a sandboxing issue
                    print("⚠️ Both modern and legacy approaches failed. This may be due to sandboxing restrictions.")
                    print("💡 The app will remember your preference and may work after a restart.")
                }
            }
        } else {
            // Fallback for older macOS versions
            print("📱 Using legacy SMLoginItemSetEnabled")
            let success = SMLoginItemSetEnabled(bundleIdentifier as CFString, enabled)
            if success {
                print("✅ Successfully \(enabled ? "enabled" : "disabled") launch at startup (legacy)")
                UserDefaults.standard.set(enabled, forKey: "LaunchAtStartup")
            } else {
                print("❌ Failed legacy launch at startup")
                // Still save to UserDefaults for consistency
                UserDefaults.standard.set(enabled, forKey: "LaunchAtStartup")
            }
        }
        
        // Re-enable toggle updates after a short delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            self.isUpdatingLaunchAtStartup = false
        }
    }
    
    private func checkLaunchAtStartupStatus() {
        // Check if the app is currently set to launch at startup
        let bundleIdentifier = Bundle.main.bundleIdentifier ?? "denpo.DontSleep"
        print("🔍 Checking launch at startup status for bundle: \(bundleIdentifier)")
        
        if #available(macOS 13.0, *) {
            // For sandboxed apps, use the app itself as the login item
            let service = SMAppService.mainApp
            let serviceStatus = service.status
            let isServiceEnabled = serviceStatus == .enabled
            
            // Also check UserDefaults as a fallback
            let savedSetting = UserDefaults.standard.bool(forKey: "LaunchAtStartup")
            
            print("📊 Service status: \(serviceStatus), Service enabled: \(isServiceEnabled), UserDefaults: \(savedSetting)")
            
            // For sandboxed apps, prefer the service status when available
            if serviceStatus == .notFound || serviceStatus == .requiresApproval {
                print("⚠️ SMAppService not available, using UserDefaults")
                launchAtStartup = savedSetting
            } else {
                // Use the service status when available
                launchAtStartup = isServiceEnabled
                // But also update UserDefaults to match
                UserDefaults.standard.set(isServiceEnabled, forKey: "LaunchAtStartup")
            }
            
            print("✅ Final launch at startup status: \(launchAtStartup)")
        } else {
            // Fallback for older macOS versions - use UserDefaults
            launchAtStartup = UserDefaults.standard.bool(forKey: "LaunchAtStartup")
            print("📱 Launch at startup status (legacy): \(launchAtStartup)")
        }
        
        // Load the sleep prevention default setting
        startWithSleepPreventionEnabled = UserDefaults.standard.object(forKey: "StartWithSleepPreventionEnabled") as? Bool ?? true
    }
}

#Preview {
    SettingsView()
} 