//
//  SleepPreventer.swift
//  DontSleep
//
//  Created by Denis Povarov on 11.07.2025.
//

import Foundation
import IOKit.pwr_mgt

class SleepPreventer: ObservableObject {
    @Published var isPreventingSleep = false
    
    private var systemSleepAssertionID: IOPMAssertionID = 0
    private var displaySleepAssertionID: IOPMAssertionID = 0
    
    private let assertionName = "DontSleep App" as CFString
    private let assertionReason = "User requested sleep prevention" as CFString
    
    init() {
        // Check user preference for default behavior
        let shouldStartEnabled = UserDefaults.standard.object(forKey: "StartWithSleepPreventionEnabled") as? Bool ?? true
        
        if shouldStartEnabled {
            // Start with sleep prevention enabled
            preventSleep()
        }
    }
    
    func toggleSleepPrevention() {
        if isPreventingSleep {
            allowSleep()
        } else {
            preventSleep()
        }
    }
    
    private func preventSleep() {
        // Don't create new assertions if already preventing sleep
        guard !isPreventingSleep else { return }
        
        // Prevent system sleep
        let systemResult = IOPMAssertionCreateWithName(
            kIOPMAssertionTypeNoIdleSleep as CFString,
            IOPMAssertionLevel(kIOPMAssertionLevelOn),
            assertionReason,
            &systemSleepAssertionID
        )
        
        // Prevent display sleep
        let displayResult = IOPMAssertionCreateWithName(
            kIOPMAssertionTypeNoDisplaySleep as CFString,
            IOPMAssertionLevel(kIOPMAssertionLevelOn),
            assertionReason,
            &displaySleepAssertionID
        )
        
        if systemResult == kIOReturnSuccess && displayResult == kIOReturnSuccess {
            isPreventingSleep = true
            print("Sleep prevention enabled")
        } else {
            print("Failed to enable sleep prevention. System: \(systemResult), Display: \(displayResult)")
        }
    }
    
    private func allowSleep() {
        // Don't release assertions if not preventing sleep
        guard isPreventingSleep else { return }
        
        // Release system sleep assertion
        if systemSleepAssertionID != 0 {
            let systemResult = IOPMAssertionRelease(systemSleepAssertionID)
            if systemResult == kIOReturnSuccess {
                systemSleepAssertionID = 0
            }
        }
        
        // Release display sleep assertion
        if displaySleepAssertionID != 0 {
            let displayResult = IOPMAssertionRelease(displaySleepAssertionID)
            if displayResult == kIOReturnSuccess {
                displaySleepAssertionID = 0
            }
        }
        
        isPreventingSleep = false
        print("Sleep prevention disabled")
    }
    
    deinit {
        // Clean up any active assertions
        allowSleep()
    }
} 