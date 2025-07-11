//
//  DontSleepApp.swift
//  DontSleep
//
//  Created by Denis Povarov on 11.07.2025.
//

import SwiftUI

@main
struct DontSleepApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        // Return an empty scene since we're using a pure tray app
        Settings {
            EmptyView()
        }
    }
}
