"use client";

import { Quote, CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Ben T.",
    location: "Dallas, Texas, USA",
    testimonial: "I work two jobs and was still falling behind on my credit card bills. I don't have any special tech skills, but TrustTask set everything up for me and now I get an extra paycheck every week without lifting a finger. It's been a huge relief for me and my family.",
    rating: 5,
    avatar: "/pp1.jpg",
    verified: true,
    joinDate: "March 2024",
    role: "Working Parent"
  },
  {
    name: "Lisa M",
    location: "Brisbane, Queensland, Australia",
    testimonial: "I'm not great with computers, so I always assumed online income wasn't for me. TrustTask proved otherwise. They guided me through a simple sign-up, did all the work, and I just see the money arrive weekly. It's honestly the easiest income I've ever made.",
    rating: 5,
    avatar: "/pp2.jpg",
    verified: true,
    joinDate: "February 2024",
    role: "Retail Worker"
  },
  {
    name: "Claire R.",
    location: "Birmingham, England, UK",
    testimonial: "I was juggling shifts at the café and part-time retail work, and still had nothing left over at the end of the month. TrustTask took care of everything from account setup to the actual tasks. I've never done anything like this before, but now I'm earning passively and can finally save a little each month.",
    rating: 5,
    avatar: "/pp3.jpg",
    verified: true,
    joinDate: "January 2024",
    role: "Service Worker"
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
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#451aea]/10 text-[#451aea] rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#451aea]/20">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Real Results from Real Users
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Why People Choose TrustTask
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Join professionals who&apos;ve already transformed their tasking accounts into reliable passive income streams
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
                    <Image
                      key={i}
                      src="/star.png"
                      alt="Star"
                      width={20}
                      height={20}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-6 sm:mb-8 leading-relaxed text-gray-700 text-sm sm:text-base">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#451aea]/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                        {testimonial.verified && (
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-12 bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg">
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Image
                src="/star.png"
                alt="Star"
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <div className="text-left">
                <div className="text-base sm:text-lg font-semibold text-gray-900">5.0</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Verified Users */}
            <div className="flex items-center space-x-2">
              <Image
                src="/tick-mark.png"
                alt="Verified"
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <div className="text-left">
                <div className="text-base sm:text-lg font-semibold text-gray-900">100%</div>
                <div className="text-xs text-gray-600">Verified</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Weekly Payouts */}
            <div className="flex items-center space-x-2">
              <Image
                src="/7-days.png"
                alt="Weekly"
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
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