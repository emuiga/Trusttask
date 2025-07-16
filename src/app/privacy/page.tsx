"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8f2ff]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-[#451aea] hover:text-[#4b7aec] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TrustTask Privacy Policy
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> June 30, 2025
          </p>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p>
              TrustTask (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect the data you share with us when using our services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal identification information:</h3>
                  <p>Name, email address, PayPal email, country of residence, and contact details.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account login credentials:</h3>
                  <p>For third-party platforms (strictly for operational task fulfilment).</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">User-submitted content:</h3>
                  <p>Such as screenshots, verification files, and other application materials.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate and manage your accounts on supported tasking platforms.</li>
                <li>Facilitate weekly revenue-share payouts.</li>
                <li>Provide customer support and communication.</li>
                <li>Maintain internal operational and task records.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Protect Your Information</h2>
              <p className="mb-4">We take security seriously and implement appropriate measures, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Secure encryption and limited internal access to all login credentials.</li>
                <li>Strict non-disclosure agreements with our internal workforce.</li>
                <li>Periodic reviews of data handling procedures.</li>
              </ul>
              <p>
                We comply with the <strong>General Data Protection Regulation (GDPR)</strong>, the <strong>California Consumer Privacy Act (CCPA)</strong>, and other applicable data privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, update, or delete your personal information.</li>
                <li>Withdraw consent or request full deletion of your data.</li>
                <li>Request a copy of all data we have stored about you.</li>
              </ul>
              <p>
                To make a request, contact us at{" "}
                <a href="mailto:trusttaskpilot@gmail.com" className="text-[#451aea] hover:text-[#4b7aec]">
                  trusttaskpilot@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing & Third Parties</h2>
              <p>
                We do <strong>not</strong> sell, lease, or distribute your data to third parties. Information is only shared with trusted internal agents necessary to perform task completion securely and efficiently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p>
                We retain personal and platform data only as long as necessary for task performance and payout documentation. You may request deletion of all data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Policy Updates</h2>
              <p>
                This policy may be updated periodically. All updates will be posted on this page and emailed to users who have opted in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
              <p className="mb-4">For questions or privacy-related requests, contact:</p>
              <p>
                Email: <a href="mailto:support@trusttask.net" className="text-[#4b7aec]">support@trusttask.net</a>
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-lg font-semibold text-gray-900">
                By using TrustTask, you consent to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 