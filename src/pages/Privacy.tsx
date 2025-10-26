import React from 'react';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/navbar';
const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="display-xs-semibold md:display-sm-semibold lg:display-lg-semibold  mb-2 mt-20 text-gray-cool-950">Privacy Policy</h1>
          <p className="text-lg-regular text-gray-cool-700">
            <strong>Last Updated:</strong> Mar 29, 2025
          </p>
        </div>

        <div className="border-t border-gray-200 mb-8"/>

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">1. Introduction</h2>
          <p className="text-lg-regular text-gray-cool-700  mb-6">
            Welcome to <strong>Typid</strong> ("we," "our," or "us"). Typid operates multiple services, including <strong>Typid App</strong> (a personal finance tracker) and <strong>Typid Events</strong> (an event management and ticketing platform).
          </p>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We respect your privacy and are committed to protecting your personal data under the <strong>Data Privacy Act of 2012 (RA 10173)</strong>. This Privacy Policy explains how we collect, use, and safeguard your data across all Typid products and services.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8"/>

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">2. Information We Collect</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We collect and process data through <strong>Supabase</strong>, our secure database service provider, and other authorized service providers where necessary.
          </p>
          
          <div className="mb-6">
            <p className="text-base md:text-lg leading-7 font-semibold text-gray-900 mb-3 font-['DM_Sans']">For Typid App:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
              <li><strong>User Information:</strong> User ID, authentication details</li>
              <li><strong>Financial Data:</strong> Transactions, income sources, expenses, wallet balances, categories</li>
              <li><strong>Onboarding Information:</strong> Financial situation, monthly income and expenses</li>
              <li><strong>Emergency Fund Data:</strong> Savings targets and progress</li>
              <li><strong>Usage Data:</strong> App interaction and performance data</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-base md:text-lg leading-7 font-semibold text-gray-900 mb-3 font-['DM_Sans']">For Typid Events:</p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
              <li><strong>Organizer Data:</strong> Name, email, contact details, event information</li>
              <li><strong>Attendee Data:</strong> Name, email, ticket purchase details, event preferences</li>
              <li><strong>Transaction Data:</strong> Payment records processed through secure third-party gateways (we do not store card details)</li>
            </ul>
          </div>

          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We <strong>do not collect</strong> bank account numbers, passwords, or other sensitive financial credentials.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">3. How We Use Your Data</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-4">We use your data to:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Provide and personalize Typid App and Typid Events features</li>
            <li>Track income, expenses, and budgets</li>
            <li>Manage event creation, ticket sales, and participation</li>
            <li>Improve user experience and functionality</li>
            <li>Comply with Philippine legal requirements</li>
          </ul>
          <p className="text-lg-regular text-gray-cool-700 mb-6">We will never sell your data.</p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">4. Data Protection and Security</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We use Supabase's security infrastructure, including encryption and secure storage, to protect your data. Your information is not shared with third parties except:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>When required by law (e.g., lawful government requests)</li>
            <li>With your explicit consent</li>
            <li>With service providers essential to our operations (bound by strict confidentiality agreements)</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">5. Your Rights (Under RA 10173)</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-4">You have the right to:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Access, correct, or update your personal data</li>
            <li>Object to or restrict data processing</li>
            <li>Delete your account and data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            To exercise these rights, contact <strong><a href="mailto:typidapp@gmail.com" className="text-brand-700 hover:underline">typidapp@gmail.com</a></strong>.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">6. Data Retention and Account Deletion</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We retain your information as long as your account is active or as required by law.
            When you delete your account:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li>Your personal and financial data will be permanently erased within <strong>90 days</strong></li>
            <li>Anonymized data may be retained for analytics (non-identifiable)</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">7. Children's Privacy</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            Typid services are intended for users <strong>13 years and older</strong>. We do not knowingly collect data from children under 13. If such data is identified, it will be deleted promptly.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">8. Data Storage and Transfers</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            Your data is currently stored on servers within the <strong>Philippines</strong>. If future infrastructure includes international servers, we will update this policy and ensure compliance with Philippine law.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">9. Third-Party Services</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-4">We currently use:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-lg-regular text-gray-cool-700 mb-6">
            <li><strong>Supabase</strong> – for secure database management and authentication</li>
            <li><strong>Third-party payment processors</strong> – for Typid Events transactions</li>
          </ul>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We will update this policy if we add or change third-party integrations.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">10. Analytics</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We currently do not use third-party analytics tools. If implemented in the future, we will update this Privacy Policy to describe how such tools collect and process information.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">11. Updates to This Policy</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            We may update this Privacy Policy periodically. Updates will be posted on this page and indicated by the "Last Updated" date. Major changes will be announced through in-app or email notifications.
          </p>
        </section>

        <div className="border-t border-gray-200 mb-8" />

        <section className="mb-10">
          <h2 className="display-xs-semibold mb-4 text-gray-cool-950">12. Contact Us</h2>
          <p className="text-lg-regular text-gray-cool-700 mb-2">
            For privacy inquiries or data requests, contact us at:
          </p>
          <p className="text-lg-regular text-gray-cool-700 mb-6">
            📧 <strong><a href="mailto:typidapp@gmail.com" className="text-brand-700 hover:underline">typidapp@gmail.com</a></strong>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

