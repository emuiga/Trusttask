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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isScrollingUp 
            ? 'bg-[#120932]/90 backdrop-blur-md border-b border-[#34205e]/50' 
            : 'bg-[#120932]/95 backdrop-blur-md border-b border-[#34205e]/50'
          : 'bg-[#120932]/80 backdrop-blur-sm'
      }`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Image src="/logonobg.png" alt="TrustTask Logo" width={40} height={40} className="h-10 w-10" priority />
            <span className="text-xl font-bold text-white tracking-tight">TrustTask</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 ml-8">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#testimonials", label: "Results" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:bg-white hover:text-[#120932] transition-all duration-200 px-3 py-1.5 rounded-full"
                style={{ letterSpacing: 0.01 + 'em' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* CTA Button */}
          <div className="hidden md:block ml-8">
            <Button
              onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
              className="btn-cta px-5 py-1.5 text-sm font-semibold"
              style={{ background: 'var(--color-cta)', color: '#18181b', boxShadow: 'none', border: 'none' }}
            >
              Get started for free
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white hover:text-[#120932] transition-all duration-200 p-1.5 rounded-full"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#120932]/95 backdrop-blur-md border-t border-[#34205e]/50">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#testimonials", label: "Results" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-[#120932] transition-all duration-200 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    window.open('https://tally.so/r/nrQWVX', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="btn-cta w-full font-semibold text-sm py-2"
                  style={{ background: 'var(--color-cta)', color: '#18181b', boxShadow: 'none', border: 'none' }}
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