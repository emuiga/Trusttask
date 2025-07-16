"use client";

import { ArrowRight, Sparkles, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 flex items-center justify-center relative overflow-hidden min-h-screen"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Person working on tasks and productivity"
          className="w-full h-full object-cover"
        />
        {/* Darker overlay on left side for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063970]/95 via-[#063970]/80 to-transparent"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eeeee4' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20">
          {/* Left: Text Content overlaid on image */}
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
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#76b5c5]/20 backdrop-blur-sm text-[#eeeee4] rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-[#abdbe3]/50 shadow-lg"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Passive Income Made Simple
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight drop-shadow-lg"
            >
              Turn Your Tasking Accounts
              <span className="block text-[#76b5c5] font-semibold mt-1 sm:mt-2">
                Into Passive Income Streams
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-white mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md"
            >
              Stop trading time for money. Our team completes every task while you earn weekly payouts. Transform your accounts from active work to passive income.
            </motion.p>

            {/* Benefit Icons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
                {/* Easy Process */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#76b5c5]" />
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Easy Process</span>
                </div>

                {/* 24/7 Support */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm">24/7 Support</span>
                </div>

                {/* Weekly Payouts */}
                <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#abdbe3]/50">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#76b5c5]" />
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Weekly Payouts</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <button 
                onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#76b5c5] text-[#21130d] font-bold rounded-full hover:bg-[#abdbe3] transition-all duration-200 text-base sm:text-lg shadow-xl hover:shadow-2xl"
              >
                Join the waitlist
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white/90 font-medium"
            >
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#76b5c5] rounded-full mr-1.5 sm:mr-2" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1e81b0] rounded-full mr-1.5 sm:mr-2" />
                <span>Fully automated</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#abdbe3] rounded-full mr-1.5 sm:mr-2" />
                <span>Guaranteed payouts</span>
              </div>
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
