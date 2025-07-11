//
//  AppDelegate.swift
//  DontSleep
//
//  Created by Denis Povarov on 11.07.2025.
//

import Cocoa
import SwiftUI
import Combine
import ServiceManagement // Added for launch at startup functionality

class AppDelegate: NSObject, NSApplicationDelegate {
    private var statusItem: NSStatusItem?
    private var sleepPreventer = SleepPreventer()
    private var settingsWindow: NSWindow?
    
    func applicationDidFinishLaunching(_ notification: Notification) {
        // Hide dock icon to make it a pure tray app
        NSApp.setActivationPolicy(.accessory)
        
        // Create status item
        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.squareLength)
        
        // Set up the status item
        setupStatusItem()
        
        // Update the icon immediately
        updateStatusIcon()
        
        // Listen for sleep prevention changes
        sleepPreventer.objectWillChange.sink { [weak self] _ in
            DispatchQueue.main.async {
                self?.updateStatusIcon()
            }
        }.store(in: &cancellables)
    }
    
    private var cancellables = Set<AnyCancellable>()
    
    private func setupStatusItem() {
        guard let statusItem = statusItem else { return }
        
        // Set up the menu
        let menu = NSMenu()
        
        // Toggle menu item
        let toggleItem = NSMenuItem(
            title: "Prevent Sleep",
            action: #selector(toggleSleepPrevention),
            keyEquivalent: ""
        )
        toggleItem.target = self
        menu.addItem(toggleItem)
        
        // Separator
        menu.addItem(NSMenuItem.separator())
        
        // Settings menu item
        let settingsItem = NSMenuItem(
            title: "Settings...",
            action: #selector(openSettings),
            keyEquivalent: ","
        )
        settingsItem.target = self
        menu.addItem(settingsItem)
        
        // Separator
        menu.addItem(NSMenuItem.separator())
        
        // Quit menu item
        let quitItem = NSMenuItem(
            title: "Quit DontSleep",
            action: #selector(quitApplication),
            keyEquivalent: "q"
        )
        quitItem.target = self
        menu.addItem(quitItem)
        
        statusItem.menu = menu
    }
    
    private func updateStatusIcon() {
        guard let statusItem = statusItem else { return }
        
        let iconName = sleepPreventer.isPreventingSleep ? "sun.max.fill" : "moon.fill"
        let image = NSImage(systemSymbolName: iconName, accessibilityDescription: nil)
        image?.size = NSSize(width: 18, height: 18)
        statusItem.button?.image = image
        
        // Update menu item title
        if let menu = statusItem.menu,
           let toggleItem = menu.items.first {
            toggleItem.title = sleepPreventer.isPreventingSleep ? "Allow Sleep" : "Prevent Sleep"
        }
    }
    
    @objc private func toggleSleepPrevention() {
        sleepPreventer.toggleSleepPrevention()
    }
    
    @objc private func openSettings() {
        if settingsWindow == nil {
            let settingsView = SettingsView()
            settingsWindow = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 520, height: 450),
                styleMask: [.titled, .closable, .miniaturizable],
                backing: .buffered,
                defer: false
            )
            settingsWindow?.title = "DontSleep Settings"
            settingsWindow?.contentView = NSHostingView(rootView: settingsView)
            settingsWindow?.center()
            settingsWindow?.isReleasedWhenClosed = false
            
            // Handle window closing
            settingsWindow?.delegate = self
        }
        
        settingsWindow?.makeKeyAndOrderFront(nil)
        NSApp.activate(ignoringOtherApps: true)
    }
    
    @objc private func quitApplication() {
        NSApp.terminate(nil)
    }
    
    func applicationWillTerminate(_ notification: Notification) {
        // Clean up - the SleepPreventer's deinit will handle releasing assertions
        sleepPreventer = SleepPreventer()
    }
}

// MARK: - NSWindowDelegate
extension AppDelegate: NSWindowDelegate {
    func windowWillClose(_ notification: Notification) {
        if notification.object as? NSWindow == settingsWindow {
            settingsWindow = nil
        }
    }
} 