"use client";

import { CheckCircle, Shield, Clock, BarChart3, CreditCard, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    benefit: "Fully Hands-Off",
    description: "Our team completes every task for you — no effort required",
    icon: CheckCircle
  },
  {
    benefit: "Weekly Payouts",
    description: "Receive your earnings on time, every week.",
    icon: Clock
  },
  {
    benefit: "Live Tracking Dashboard",
    description: "Monitor your account activity, task progress, and payouts in real time.",
    icon: BarChart3
  },
  {
    benefit: "No Upfront Costs",
    description: "We only succeed when you do — no payments until you're paid.",
    icon: CreditCard
  },
  {
    benefit: "Built on Confidence",
    description: "Registered company, live support, signed agreement.",
    icon: Shield
  },
  {
    benefit: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team.",
    icon: Users
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function BenefitsTable() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#120932' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-white/5 text-white/80 rounded-full text-xs font-medium mb-6 border border-white/10">
            <Sparkles className="w-3 h-3 mr-2" />
            Why Choose TrustTask
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 leading-tight">
            Built for Success
          </h2>
          <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            We&apos;ve engineered every aspect of our system to maximize your earnings while minimizing your effort.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group h-full"
              >
                <div className="bg-[#34205e]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.benefit}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-purple-400 rounded-full border border-white/20" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-medium text-sm">
                Trusted by users across 5 countries
              </div>
              <div className="text-white/50 text-xs">
                Join our growing community
              </div>
            </div>
            <Users className="h-4 w-4 text-white/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 