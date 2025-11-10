import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { trackDownload as trackDownloadServerFn } from "./api.download";

export const Route = createFileRoute("/")({
  component: Home,
});

// Download tracking function
async function trackDownload(version: string = "0.0.2") {
  try {
    const data = await trackDownloadServerFn({ 
      data: {
        version,
        referrer: document.referrer || '',
      }
    });
    
    return data.downloadUrl || "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
  } catch (error) {
    console.error('Download tracking failed:', error);
    // Return direct download URL if tracking fails
    return "https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg";
  }
}

// Download button component
function DownloadButton({ className, children }: { className: string; children: React.ReactNode }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      const downloadUrl = await trackDownload();
      // Open download in new tab
      window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct download
      window.open("https://github.com/silverbullet-apps/dont-sleep/releases/download/0.0.2/DontSleep-Installer.dmg", '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={className}
    >
      {isDownloading ? 'Starting Download...' : children}
    </button>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* App Icon */}
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl moon-animation absolute">🌙</span>
              <span className="text-4xl sun-animation absolute">☀️</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DontSleep
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Keep your Mac awake when you need it. A simple, elegant menu bar app
            that prevents sleep.
          </p>

          {/* 100% Free Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold text-lg border border-green-200">
              💯 100% Free & Open Source
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              Download for macOS
            </DownloadButton>
            <a
              href="https://github.com/silverbullet-apps/dont-sleep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 font-medium text-lg underline decoration-2 underline-offset-4"
            >
              View on GitHub
            </a>
          </div>

        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Always Green in Slack
            </h3>
            <p className="text-gray-600">
              Stay active in Slack and Teams by preventing your Mac from sleeping.
              Never appear away when you're actually working.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Long Downloads
            </h3>
            <p className="text-gray-600">
              Keep your Mac awake during large file transfers, backups, or
              system updates.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Monitor Processes
            </h3>
            <p className="text-gray-600">
              Keep an eye on system processes, builds, or any task that requires
              your attention.
            </p>
          </div>

          {/* Feature 4 - New Vibe Coding Feature */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vibe Coding
            </h3>
            <p className="text-gray-600">
              Don't sleep while AI writes code for you. Perfect for long AI-assisted coding sessions.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple & Elegant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DontSleep lives quietly in your menu bar, ready when you need it.
              One click to prevent sleep, another to allow it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Menu Bar Integration
                  </h3>
                  <p className="text-gray-600">
                    Lives quietly in your menu bar with clear visual indicators
                    - moon when allowing sleep, sun when preventing it.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Launch at Startup
                  </h3>
                  <p className="text-gray-600">
                    Optionally start with your Mac and begin with sleep
                    prevention enabled for seamless workflow.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Lightweight & Fast
                  </h3>
                  <p className="text-gray-600">
                    Minimal resource usage with instant toggle. No bloat, no
                    unnecessary features - just what you need.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="text-center">
              <div className="inline-block bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">
                      Sleep Prevention Active
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Prevent Sleep</span>
                    <span className="text-green-400">✓ ON</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Launch at Startup</span>
                    <span className="text-green-400">✓ ON</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Menu Bar Icon</span>
                    <span className="text-yellow-400">☀️ Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about DontSleep
            </p>
          </div>

          <div className="space-y-8">
            {/* Official Signing FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    🔐 Is DontSleep officially signed and notarized?
                  </h3>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      <strong>Yes!</strong> DontSleep is officially signed with an Apple Developer ID certificate
                      and notarized by Apple. This means:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>No security warnings:</strong> macOS recognizes DontSleep as a trusted application from an identified developer</li>
                      <li><strong>Verified by Apple:</strong> The app has been scanned and approved by Apple's automated security systems</li>
                      <li><strong>Safe to install:</strong> You can download and run DontSleep immediately without any workarounds</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                      DontSleep is 100% open source, so you can always review the code on GitHub to verify what it does.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Free App FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    💰 Is DontSleep really free?
                  </h3>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      <strong>Yes, 100% free forever!</strong> DontSleep is open source software with no hidden costs,
                      subscriptions, or premium features. We believe essential Mac utilities should be free for everyone.
                    </p>
                    <p>
                      The app is officially signed and notarized by Apple, giving you peace of mind while keeping
                      it completely free for users like you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    🌙 How do I use DontSleep?
                  </h3>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      After installation, look for the DontSleep icon in your menu bar (top-right of your screen). 
                      Click it to toggle sleep prevention on/off:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>🌙 Moon icon:</strong> Sleep prevention is OFF (normal behavior)</li>
                      <li><strong>☀️ Sun icon:</strong> Sleep prevention is ON (Mac stays awake)</li>
                    </ul>
                    <p>
                      You can also access settings by clicking the icon and selecting "Settings" to configure 
                      launch at startup and other preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 1z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    🔒 Does DontSleep collect my data?
                  </h3>
                  <div className="text-gray-600 space-y-3">
                    <p>
                      <strong>No, absolutely not!</strong> DontSleep is a local-only app that doesn't collect, 
                      store, or transmit any personal data. It only uses macOS system APIs to prevent sleep 
                      - nothing more, nothing less.
                    </p>
                    <p>
                      Your privacy is important to us. The app works entirely offline and never connects 
                      to the internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to keep your Mac awake?
            </h3>
            <p className="text-gray-400 mb-6">
              Download DontSleep today and never worry about your Mac sleeping
              at the wrong time.
            </p>
            <DownloadButton className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              Download Now
            </DownloadButton>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 mb-4">
              © 2025 DontSleep. Made with ❤️ for Mac users.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-gray-300 text-sm">
                <strong>💯 Always Free:</strong> DontSleep is 100% free and open source.
                Officially signed and notarized by Apple for your security and peace of mind.
              </p>
            </div>
            <div className="flex justify-center space-x-6 text-sm mb-4">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <a
                href="https://github.com/silverbullet-apps/dont-sleep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://denpo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                More apps by Denis
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
