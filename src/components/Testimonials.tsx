"use client";

import { Star, Quote, CheckCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jess",
    location: "NJ",
    testimonial: "Rapid on-boarding and consistent earnings.",
    rating: 5,
    avatar: "J"
  },
  {
    name: "David",
    location: "TX",
    testimonial: "Seamless setup and strong weekly performance.",
    rating: 5,
    avatar: "D"
  },
  {
    name: "Maya",
    location: "FL",
    testimonial: "Top earner in our initial testing cohort.",
    rating: 5,
    avatar: "M"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#f0f4ff] to-[#e8f2ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            See what our users are saying about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#451aea]/5 to-[#4b7aec]/5 rounded-full -translate-y-8 sm:-translate-y-10 md:-translate-y-16 translate-x-8 sm:translate-x-10 md:translate-x-16"></div>
                
                {/* Quote icon */}
                <div className="mb-4 sm:mb-6 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#451aea] to-[#4b7aec] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-6 sm:mb-8 italic leading-relaxed text-gray-700 text-sm sm:text-base">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#451aea] to-[#4b7aec] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-12 bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg">
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
              <div className="text-left">
                <div className="text-base sm:text-lg font-semibold text-gray-900">5.0</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Verified Users */}
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              <div className="text-left">
                <div className="text-base sm:text-lg font-semibold text-gray-900">100%</div>
                <div className="text-xs text-gray-600">Verified</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Weekly Payouts */}
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#451aea]" />
              <div className="text-left">
                <div className="text-base sm:text-lg font-semibold text-gray-900">Weekly</div>
                <div className="text-xs text-gray-600">Payouts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 