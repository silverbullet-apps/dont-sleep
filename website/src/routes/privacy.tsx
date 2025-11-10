import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-block mb-8 text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: November 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DontSleep is committed to protecting your privacy. This Privacy Policy explains
              how we handle information when you use our macOS application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Don't Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DontSleep is a privacy-first application. We want to be clear about what we
              <strong> don't</strong> do:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>We do not collect any personal information</li>
              <li>We do not track your usage of the application</li>
              <li>We do not store any data about you or your computer</li>
              <li>We do not use analytics or tracking tools</li>
              <li>We do not share any information with third parties</li>
              <li>We do not display advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How DontSleep Works
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DontSleep operates entirely on your local machine:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                The app uses macOS system APIs to prevent your Mac from sleeping
              </li>
              <li>
                All settings and preferences are stored locally on your device
              </li>
              <li>
                No data is transmitted over the internet
              </li>
              <li>
                The app functions completely offline
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Website Analytics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website (dontsleep.app) may collect basic anonymous analytics to understand
              how visitors use the site. This data is aggregated and anonymous, and does not
              identify individual users. The DontSleep application itself does not participate
              in any analytics or tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DontSleep is open source software. You can review the complete source code on
              GitHub to verify our privacy claims. Transparency is important to us, and we
              encourage you to examine how the application works.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DontSleep does not integrate with or use any third-party services that would
              have access to your data. The application is completely self-contained and
              independent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated revision date. Since DontSleep doesn't collect any
              data, changes to this policy will generally be minimal and related to clarity
              or legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please open an issue on
              our GitHub repository or contact us through our website.
            </p>
          </section>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Summary
            </h3>
            <p className="text-blue-800">
              DontSleep is designed with privacy as a core principle. We don't collect, store,
              or transmit any of your data. The app works entirely on your local machine and
              never connects to the internet.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 DontSleep. Made with ❤️ for Mac users.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
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
        </div>
      </div>
    </div>
  );
}
