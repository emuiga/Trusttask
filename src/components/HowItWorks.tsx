"use client";

import { Check, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Get Onboarded",
    subtitle: "Simple Setup Process",
    items: [
      "Fill out simple forms",
      "Complete guided setup",
      "Connect your accounts"
    ],
    icon: "1"
  },
  {
    title: "Everything Runs Automatically",
    subtitle: "Hands-Off Operation",
    items: [
      "Our team completes all tasks",
      "No involvement required from you",
      "Hands-off operation"
    ],
    icon: "2"
  },
  {
    title: "Receive Weekly Payouts",
    subtitle: "Consistent Income",
    items: [
      "Automated payment processing",
      "No maintenance needed",
      "Consistent income stream"
    ],
    icon: "3"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#451aea]/10 text-[#451aea] rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#451aea]/20">
            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            How It Works
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            From Setup to Passive Income
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Transform your tasking accounts into automated income streams in three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#451aea] text-white text-base sm:text-lg font-bold rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full pt-8 sm:pt-10 md:pt-12">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#451aea] font-medium text-xs sm:text-sm">
                    {step.subtitle}
                  </p>
                </div>
                
                <ul className="space-y-3 sm:space-y-4">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-[#451aea] flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#451aea] to-[#4b7aec]"></div>
              )}
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
          <div className="bg-gradient-to-r from-[#451aea] to-[#4b7aec] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Income?
            </h3>
            <p className="mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-white/90 text-sm sm:text-base md:text-lg px-4 sm:px-0">
              Join thousands of users who are already earning passive income with TrustTask.
            </p>
            <button 
              onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-[#451aea] font-bold rounded-lg sm:rounded-xl transition-all duration-200 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 