"use client";

import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#120932] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#00ffb0] rounded flex items-center justify-center">
                <span className="text-[#18181b] font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-medium">TrustTask</span>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Effortless income from your tasking accounts. We handle the work. You get the rewards.
            </p>
            
            {/* Contact */}
            <div className="flex items-center space-x-3 text-white/70 mb-4">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:support@trusttask.net"
                className="text-sm hover:text-white transition-colors"
              >
                support@trusttask.net
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">Product</h4>
            <div className="space-y-2">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#testimonials", label: "Results" },
                { href: "#faq", label: "FAQ" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">Company</h4>
            <div className="space-y-2">
              <a href="https://tally.so/r/nrQWVX" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-colors text-sm">
                Join Waitlist
              </a>
              <a href="https://invited-way-f65.notion.site/TrustTask-Terms-Conditions-2296e97a928f80b7baefc6cd1a96a41f" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">Resources</h4>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  // Toggle live chat - this will be handled by the LiveChat component
                  const event = new CustomEvent('toggleLiveChat');
                  window.dispatchEvent(event);
                }}
                className="block text-white/70 hover:text-white transition-colors text-sm text-left w-full"
              >
                Help Center
              </button>
              <a href="http://bit.ly/4lmDFtZ" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-xs mb-4 md:mb-0">
              © {new Date().getFullYear()} TrustTask Ltd. All rights reserved.
            </p>
            
            <div className="text-white/50 text-xs text-center max-w-2xl">
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
          className="fixed bottom-6 right-6 w-10 h-10 bg-[#00ffb0] text-[#18181b] rounded-full transition-all duration-200 hover:bg-[#00e6a0] z-50"
        >
          <ArrowUp className="h-5 w-5 mx-auto" />
        </button>
      </div>
    </footer>
  );
} 