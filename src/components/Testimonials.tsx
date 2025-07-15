"use client";

import { Star, Quote } from "lucide-react";
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
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            See what our users are saying about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-gray-400" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#00ffb0] rounded-full flex items-center justify-center text-[#18181b] font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-6 bg-white px-6 py-3 rounded-full border border-gray-200">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-gray-900 font-medium text-sm">5.0</span>
            </div>
            <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
            <span className="text-gray-900 font-medium text-sm">100% Verified Users</span>
            <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
            <span className="text-gray-900 font-medium text-sm">Weekly Payouts</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 