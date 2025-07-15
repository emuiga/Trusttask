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
    <section id="faq" className="py-24 bg-[#120932] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-white/70 font-light">
            Everything you need to know about TrustTask
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#34205e]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:text-white/80 px-6 py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#34205e]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white/70 mb-6 text-sm">
              Still have questions? We&apos;re here to help.
            </p>
            <Button 
              onClick={() => window.open('mailto:trusttaskpilot@gmail.com', '_blank')}
              className="bg-[#00ffb0] text-[#18181b] px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact our support team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 