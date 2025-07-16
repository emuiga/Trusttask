"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const faqs = [
  {
    question: "What's a tasking account?",
    answer: "These are online platforms that pay users to complete micro-tasks like surveys, AI training, data labelling, and more. Many require specialised skills — our team takes care of the work, so you don't have to."
  },
  {
    question: "Do I have to do anything?",
    answer: "Nope. Once you're on-boarded, we handle everything from start to finish."
  },
  {
    question: "How do payouts work?",
    answer: "We deposit your share directly to your account every week. Your dashboard provides full visibility into task completion and earnings history."
  },
  {
    question: "Is this permitted by the task platforms?",
    answer: "We only operate on platforms that accept remote workers globally. We manage all operational risk — your share is fixed and guaranteed."
  },
  {
    question: "What if my account is deactivated?",
    answer: "We cover your earnings for the current pay cycle and assist in getting you back online with a new account."
  },
  {
    question: "Who can join?",
    answer: "We currently accept users in the United States, Canada, the UK, Australia, and New Zealand."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#f0f4ff] to-[#e8f2ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4 sm:px-0">
            Everything you need to know about TrustTask
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#451aea] px-4 sm:px-6 py-3 sm:py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-xs sm:text-sm leading-relaxed px-4 sm:px-6 pb-3 sm:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-sm">
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Still have questions? We&apos;re here to help.
            </p>
            <Button 
              onClick={() => window.open('mailto:support@trusttask.net', '_blank')}
              className="bg-[#4b7aec] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base hover:bg-[#451aea] hover:shadow-lg"
            >
              <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Contact support 
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 