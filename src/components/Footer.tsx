"use client";

import { Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Full-screen background image matching hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="People working with laptops"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#063970]/95 via-[#063970]/90 to-[#063970]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <Image src="/logonobg.png" alt="TrustTask Logo" width={48} height={48} className="h-8 w-8 sm:h-12 sm:w-12" />
              <span className="text-lg sm:text-xl font-bold">TrustTask</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
              Effortless income from your tasking accounts. We handle the work. You get the rewards.
            </p>
            
            {/* Contact */}
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 mb-4 sm:mb-6">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <a 
                href="mailto:support@trusttask.net"
                className="text-xs sm:text-sm hover:text-white transition-colors"
              >
                support@trusttask.net
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6">Product</h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#testimonials", label: "Results" },
                { href: "#faq", label: "FAQ" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6">Company</h4>
            <div className="space-y-3 sm:space-y-4">
              <a href="https://tally.so/r/nrQWVX" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Join Waitlist
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-6">Resources</h4>
            <div className="space-y-3 sm:space-y-4">
              <button 
                onClick={() => {
                  // Toggle live chat - this will be handled by the LiveChat component
                  const event = new CustomEvent('toggleLiveChat');
                  window.dispatchEvent(event);
                }}
                className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm text-left w-full"
              >
                Help Center
              </button>
              <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center lg:text-left">
              © {new Date().getFullYear()} TrustTask Ltd. All rights reserved.
            </p>
            
            <div className="text-gray-400 text-xs sm:text-sm text-center max-w-2xl">
              <p>
                TrustTask operates as an independent service completing permitted online micro‑tasks on behalf of account owners. 
                By joining, you agree to our Terms of Service and Revenue‑Share Agreement.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-[#451aea] text-white rounded-full transition-all duration-200 hover:bg-[#4b7aec] z-50 shadow-xl"
        >
          <ArrowUp className="h-5 w-5 sm:h-7 sm:w-7 mx-auto" />
        </button>
      </div>
    </footer>
  );
} 