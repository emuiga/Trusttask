"use client";

import Image from "next/image";
import { Clock } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <Image
              src="/tick-mark.png"
              alt="Verified"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Thousands
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Your security and privacy are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* GDPR Compliance */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image
                src="/gdpr.png"
                alt="GDPR Compliant"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
            <p className="text-xs text-gray-600">Full data protection compliance</p>
          </div>

          {/* SOC 2 Type II */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image
                src="/aicpa.webp"
                alt="SOC 2 Type II Certified"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
            <p className="text-xs text-gray-600">Security & availability certified</p>
          </div>

          {/* ISO 27001 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image
                src="/iso.png"
                alt="ISO 27001 Certified"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">ISO 27001</h3>
            <p className="text-xs text-gray-600">Information security certified</p>
          </div>

          {/* Uptime SLA */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
            <p className="text-xs text-gray-600">Enterprise-grade reliability</p>
          </div>
        </div>


      </div>
    </section>
  );
} 