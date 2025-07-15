"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="pt-32 md:pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
      style={{ fontFamily: 'var(--font-sans)', background: '#120932' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
        {/* Left: Text */}
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
            className="inline-flex items-center px-3 py-1.5 bg-white/5 text-white/80 rounded-full text-xs font-medium mb-6 border border-white/10"
          >
            <Sparkles className="w-3 h-3 mr-2" />
            Passive Income Made Simple
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight tracking-tight"
          >
            Turn Your Tasking Accounts
            <span className="block text-white/90 font-normal">
              Into Passive Income Streams
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm lg:text-base text-white/70 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Stop trading time for money. Our team completes every task while you earn weekly payouts. Transform your accounts from active work to passive income.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <button 
              onClick={() => window.open('https://tally.so/r/nrQWVX', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-[#00ffb0] text-[#18181b] font-medium rounded-full hover:bg-[#00e6a0] transition-all duration-200 text-sm"
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-xs text-white/50"
          >
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
              <span>Weekly payouts</span>
            </div>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
              <span>Fully automated</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Video */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-2xl lg:max-w-3xl mt-8 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="bg-[#34205e] rounded-2xl p-3 border border-[#4b357a]/30">
              <video
                src="/herovid.mp4"
                className="w-full h-auto rounded-xl"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="TrustTask demo video"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
