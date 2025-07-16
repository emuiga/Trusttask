"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
            TrustTask Terms & Conditions
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> June 30, 2025
          </p>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p>
              These Terms and Conditions govern your access to and use of the services provided by TrustTask (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our services, website, or related platforms (collectively, the &ldquo;Services&rdquo;), you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must not access or use the Services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility</h2>
              <p className="mb-4">To use the Services, you must:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Be at least 18 years old.</li>
                <li>Be a legal resident of the United States, Canada, the United Kingdom, Australia or New Zealand.</li>
                <li>Own or have legal control over any tasking accounts submitted for participation.</li>
              </ul>
              <p>By accessing the Services, you represent and warrant that you meet these requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nature of Services</h2>
              <p className="mb-4">
                TrustTask provides administrative and operational support for tasking accounts on third-party platforms (&ldquo;Tasking Platforms&rdquo;) such as data labelling, survey completion, AI training, and similar micro-tasking opportunities. We facilitate the completion of these tasks on your behalf using our internal workforce.
              </p>
              <p className="mb-4">You understand and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You authorize us to access and perform work within your approved tasking accounts.</li>
                <li>All earnings generated through these accounts will be subject to a pre-agreed revenue-share model.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Access & Responsibility</h2>
              <p className="mb-4">
                You agree to refrain from logging into or modifying any tasking account after TrustTask has commenced task fulfilment. Unauthorized access or interference will be considered a breach of this agreement and may result in immediate termination of service.
              </p>
              <p className="mb-4">We will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use your account credentials solely to complete permitted tasks.</li>
                <li>Store and manage all credentials securely using encryption and access control protocols.</li>
                <li>Maintain strict internal policies to ensure privacy and data protection.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revenue Share & Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Earnings generated through your tasking accounts will be subject to a revenue-sharing model.</li>
                <li>You will receive your share of earnings on a recurring basis via a supported payment method.</li>
                <li>Payouts are calculated after confirmation of earnings from Tasking Platforms.</li>
                <li>You are responsible for providing accurate and active payout details (e.g., PayPal email).</li>
                <li>We reserve the right to withhold or delay payouts in cases of suspected fraud or platform investigation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide access to accounts that violate third-party platform terms.</li>
                <li>Attempt to manipulate the Services or falsify platform activity.</li>
                <li>Use the Services for any illegal, deceptive, or harmful purpose.</li>
              </ul>
              <p>We reserve the right to suspend or terminate access to the Services at our sole discretion if any prohibited conduct is suspected or confirmed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="mb-4">
                The Services are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. We make no warranties or representations of any kind, express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The availability, performance, or accuracy of third-party platforms.</li>
                <li>The amount of income that may be generated.</li>
                <li>The uninterrupted or error-free use of the Services.</li>
              </ul>
              <p>Your use of the Services is at your sole risk.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by applicable law, TrustTask shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of income due to platform suspension or account termination.</li>
                <li>Data breaches resulting from third-party platforms.</li>
                <li>Delays in earnings or payout processing due to external systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless TrustTask and its officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your violation of these Terms;</li>
                <li>Your misuse of the Services;</li>
                <li>Your breach of any platform&apos;s terms of service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications to the Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. When we do, we will revise the &ldquo;Last Updated&rdquo; date. Your continued use of the Services following any updates constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under or related in any way to these Terms shall be resolved in a court of competent jurisdiction within the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about these Terms, please contact:
              </p>
              <p>
                Email: <a href="mailto:support@trusttask.net" className="text-[#4b7aec]">support@trusttask.net</a>
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                By using TrustTask, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 