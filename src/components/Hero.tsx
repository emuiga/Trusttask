"use client";

import { ArrowRight, Sparkles, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center relative overflow-hidden min-h-screen"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Person working on tasks and productivity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063970]/75 via-[#063970]/65 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-5 z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eeeee4' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 sm:gap-20 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#76b5c5] text-white rounded-full text-sm sm:text-base font-semibold mb-8 sm:mb-10 shadow-lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:w-5 mr-2 sm:mr-2.5" />
              Passive Income Made Simple
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight drop-shadow-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span style={{ color: '#ffffff' }}>Effortless Income from Your Tasking Accounts</span>
              <span className="block text-[#e8f2ff] font-semibold mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl">
                We Handle the Work. You Get the Rewards.
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-10 sm:mb-12 lg:mb-14 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10 text-sm sm:text-base text-white/95 font-medium"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#76b5c5] rounded-full mr-3" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#1e81b0] rounded-full mr-3" />
                <span>Fully automated</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#abdbe3] rounded-full mr-3" />
                <span>Guaranteed payouts</span>
              </div>
            </motion.div>

            {/* Benefit Icons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-10 sm:mb-12 lg:mb-14"
            >
              <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 justify-center lg:justify-start">
                {/* Easy Process */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#76b5c5]" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Easy Process</span>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">24/7 Support</span>
                </div>

                {/* Weekly Payouts */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#76b5c5]" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Weekly Payouts</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start items-center"
            >
              <button 
                onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-[#76b5c5] text-white font-bold rounded-full hover:bg-[#abdbe3] transition-all duration-300 text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join the waitlist
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Empty space to show the bright image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 lg:block hidden"
          >
            {/* This space allows the bright image to show through */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
