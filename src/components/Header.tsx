"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolling up
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? isScrollingUp 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 w-full">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
            <Image src="/logonobg.png" alt="TrustTask Logo" width={32} height={32} className="h-6 w-6 sm:h-8 sm:w-8" priority />
            <span className={`text-base sm:text-lg font-bold tracking-tight truncate ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              TrustTask
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 ml-6">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#testimonials", label: "Results" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#451aea]' 
                    : 'text-white hover:text-[#58a4e2]'
                }`}
                style={{ letterSpacing: 0.01 + 'em' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block ml-6">
            <Button
              onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
              className="bg-[#451aea] text-white px-6 py-2 text-sm font-bold rounded-xl hover:bg-[#4b7aec] transition-colors duration-200 shadow-lg"
            >
              Get started for free
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 p-1.5 sm:p-2 rounded-lg ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#451aea] hover:bg-gray-100' 
                  : 'text-white hover:text-[#58a4e2] hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-4 pt-2 pb-4 space-y-1 border-t ${
              isScrolled 
                ? 'bg-white border-gray-200' 
                : 'bg-white/95 backdrop-blur-md border-white/20'
            }`}>
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#testimonials", label: "Results" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 sm:py-3 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#451aea] hover:bg-gray-50' 
                      : 'text-gray-900 hover:text-[#451aea] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-3">
                <Button
                  onClick={() => {
                    window.open('https://tally.so/r/nrQWVX', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#4b7aec] text-white font-bold text-sm py-2.5 sm:py-3 rounded-xl hover:bg-[#4b7aec] transition-colors duration-200"
                >
                  Get started for free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 