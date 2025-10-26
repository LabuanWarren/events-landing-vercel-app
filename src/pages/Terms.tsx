import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="display-xs-semibold md:display-sm-semibold lg:display-lg-semibold  mb-2 text-gray-cool-950">Terms of Service</h1>
          <p className="text-lg-regular text-gray-cool-700">
            <strong>Last Updated:</strong> Mar 29, 2025
          </p>
        </div>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">1. Acceptance of Terms</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            By accessing or using any Typid service — including <strong>Typid App</strong> and <strong>Typid Events</strong> — you agree to comply with these Terms of Service, governed by the <strong>Consumer Act of the Philippines (RA 7394)</strong>.
          </p>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            If you do not agree, please discontinue use of our services.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">2. Age Restriction</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            Users must be <strong>at least 13 years old</strong>. If you are under 18, you must have parental or guardian consent to use Typid services.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">3. User Accounts</h2>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Provide accurate and complete information during registration.</li>
            <li>Notify us immediately of unauthorized use.</li>
            <li>You may delete your account at any time, permanently removing your data from our systems.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">4. User Responsibilities</h2>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Provide accurate information for the app or event tools to function correctly.</li>
            <li>Use Typid responsibly and lawfully.</li>
            <li>Do not attempt to reverse-engineer, hack, or exploit the system.</li>
            <li>Do not use Typid for illegal or fraudulent activities.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">5. Product-Specific Terms</h2>
          
          <div className="mb-6">
            <p className="text-base md:text-lg leading-7 font-semibold text-gray-900 mb-3 font-['DM_Sans']">A. Typid App</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
              <li>Typid App provides financial tracking tools for personal budgeting.</li>
              <li>We do not offer professional financial advice or guarantee financial results.</li>
              <li>You are solely responsible for financial decisions based on insights from the app.</li>
            </ul>
          </div>

          <div className="mb-0">
            <p className="text-base md:text-lg leading-7 font-semibold text-gray-900 mb-3 font-['DM_Sans']">B. Typid Events</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
              <li>Typid Events facilitates event creation, ticket sales, and attendance management.</li>
              <li>Organizers are responsible for event accuracy, conduct, and compliance with applicable laws.</li>
              <li>Refunds or disputes between organizers and attendees are handled according to the event's individual policies, where applicable.</li>
            </ul>
          </div>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">6. Intellectual Property</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            All Typid content, branding, and technology are the property of Typid and protected under Philippine and international intellectual property laws.
          </p>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            You may not reproduce, distribute, modify, or derive works without our written permission.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">7. Subscriptions and Future Paid Features</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            If Typid introduces paid subscriptions or event service fees in the future:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Pricing will be clearly disclosed before purchase.</li>
            <li>Payments will be processed through app store or third-party providers.</li>
            <li>Subscriptions will auto-renew unless canceled 24 hours before renewal.</li>
            <li>You can manage subscriptions via your account settings.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">8. Termination</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-4">
            We may suspend or terminate access if you:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Violate these Terms</li>
            <li>Use Typid for illegal or abusive activities</li>
            <li>Attempt to compromise security systems</li>
          </ul>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            Termination includes deletion of your account and associated data.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">9. Limitation of Liability</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            Typid services are provided <strong>"as is"</strong> without warranties of any kind.
            To the maximum extent permitted by law, Typid shall not be liable for:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or goodwill</li>
            <li>Any amount exceeding the total fees (if any) paid within 12 months before the claim</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">10. Modifications to Terms</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            We may modify these Terms at any time. Updated Terms will be posted on our website and reflected by a new "Last Updated" date. Continued use constitutes acceptance of the new Terms.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">11. Governing Law</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            These Terms are governed by the <strong>laws of the Republic of the Philippines</strong>.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">12. Dispute Resolution</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            Disputes shall first be resolved through friendly negotiation.
          </p>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            If unresolved, they will be submitted to the proper courts of the Philippines.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">13. Contact Information</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-4">
            For questions about these Terms, contact:
          </p>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            📧 <strong><a href="mailto:typidapp@gmail.com" className="text-[#0a7a94] hover:underline">typidapp@gmail.com</a></strong>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Terms;

