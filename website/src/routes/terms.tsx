import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
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
            Terms of Use
          </h1>
          <p className="text-gray-600">
            Last updated: November 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By downloading, installing, or using DontSleep, you agree to be bound by these
              Terms of Use. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DontSleep is free and open source software. You are granted the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the application for any lawful purpose</li>
              <li>Install the application on multiple devices you own</li>
              <li>View and study the source code</li>
              <li>Modify the source code for personal use</li>
              <li>Distribute modifications under the same open source license</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use DontSleep responsibly and in accordance with applicable laws.
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Use the application for any illegal or unauthorized purpose
              </li>
              <li>
                Modify the application to harm, damage, or compromise computer systems
              </li>
              <li>
                Remove or alter any copyright, trademark, or other proprietary notices
              </li>
              <li>
                Redistribute the application under a different name without proper attribution
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DontSleep is provided "AS IS" and "AS AVAILABLE" without warranties of any kind,
              either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the application will be error-free or uninterrupted</li>
              <li>Warranties that the application will meet your specific requirements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You use DontSleep at your own risk. While we strive to provide a quality product,
              we cannot guarantee it will work perfectly in all situations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, the developers and contributors of DontSleep
              shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred directly or indirectly,
              or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li>Your use or inability to use the application</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
              <li>Any errors or omissions in the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              System Requirements and Compatibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DontSleep is designed for macOS. We make reasonable efforts to ensure compatibility
              with supported macOS versions, but we do not guarantee the application will work on
              all systems or configurations. It is your responsibility to ensure your system meets
              the necessary requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Updates and Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update DontSleep from time to time to add features, fix bugs, or improve
              performance. Updates are provided at our discretion and without obligation. We
              reserve the right to modify or discontinue the application at any time without
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Open Source
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DontSleep is licensed under an open source license. The specific terms of that
              license are available in the application's GitHub repository. In the event of any
              conflict between these Terms of Use and the open source license, the open source
              license shall prevail with respect to the source code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless the developers and contributors of DontSleep
              from any claims, damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of the application or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. Changes will be
              posted on this page with an updated revision date. Your continued use of DontSleep
              after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with applicable
              laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Use, please open an issue on our
              GitHub repository or contact us through our website.
            </p>
          </section>

          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              In Simple Terms
            </h3>
            <p className="text-green-800">
              DontSleep is free software that you can use however you like, but we can't be
              held responsible if something goes wrong. We've done our best to make it safe
              and reliable, but as with any software, use it at your own risk.
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
