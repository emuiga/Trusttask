"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Get Onboarded",
    items: [
      "Fill out simple forms",
      "Complete guided setup",
      "Connect your accounts"
    ]
  },
  {
    title: "Everything Runs Automatically",
    items: [
      "Our team completes all tasks",
      "No involvement required from you",
      "Hands-off operation"
    ]
  },
  {
    title: "Receive Weekly Payouts",
    items: [
      "Automated payment processing",
      "No maintenance needed",
      "Consistent income stream"
    ]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            From Setup to Passive Income
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Transform your tasking accounts into automated income streams in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00ffb0] text-[#18181b] text-lg font-semibold rounded-xl mb-4">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {step.title}
              </h3>
              <ul className="space-y-3 text-left">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start text-gray-600 text-sm">
                    <Check className="w-4 h-4 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Ready to Transform Your Income?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
              Join thousands of users who are already earning passive income with TrustTask.
            </p>
            <button 
              onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-[#00ffb0] text-[#18181b] font-medium rounded-full hover:bg-[#00e6a0] transition-all duration-200 text-sm"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 