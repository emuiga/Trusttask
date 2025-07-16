"use client";

import { CheckCircle, Shield, Clock, BarChart3, CreditCard, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    benefit: "Fully Hands-Off",
    description: "Our professional team completes every task for you — no effort required from your side",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    benefit: "Weekly Payouts",
    description: "Receive your earnings consistently every week with automated payment processing",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    benefit: "Live Dashboard",
    description: "Monitor your account activity, task progress, and earnings in real-time",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    benefit: "No Upfront Costs",
    description: "We only succeed when you do — no payments until you receive your first payout",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    benefit: "Built on Trust",
    description: "Registered company with live support, signed agreements, and proven track record",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    benefit: "24/7 Support",
    description: "Get help whenever you need it with our dedicated customer support team",
    icon: Users,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const userAvatars = [
  // "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
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
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#451aea]/10 text-[#451aea] rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#451aea]/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Why Choose TrustTask
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Built for Success
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We&apos;ve engineered every aspect of our system to maximize your earnings while minimizing your effort.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative h-32 sm:h-40 md:h-48 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.benefit}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#451aea] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                      {item.benefit}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 bg-white px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex -space-x-2 sm:-space-x-3">
              {userAvatars.map((avatar, i) => (
                <div key={i} className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <Image
                    src={avatar}
                    alt={`User`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-gray-900 font-bold text-base sm:text-lg">
                Trusted by users across 5 countries
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Join our growing community
              </div>
            </div>
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#4b7aec]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 