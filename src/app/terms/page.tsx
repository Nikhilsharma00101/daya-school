"use client";

import { motion } from "framer-motion";
import { Shield, Scale, FileText, Lock, Bell, MessageCircle, Sparkles } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Daya Little Step Public School website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services."
  },
  {
    icon: FileText,
    title: "2. Use of the Website",
    content: "The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense."
  },
  {
    icon: Scale,
    title: "3. Intellectual Property",
    content: "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions."
  },
  {
    icon: Lock,
    title: "4. Privacy & Data Protection",
    content: "Your use of this website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices."
  },
  {
    icon: Bell,
    title: "5. Admissions & Fees",
    content: "Information regarding admissions and fees displayed on the website is indicative. Final decisions on admissions and fee structures rest solely with the school management and are subject to the school's internal policies and guidelines."
  },
  {
    icon: MessageCircle,
    title: "6. Contact Information",
    content: "If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@dayaschool.edu.in or visit us at Sector 9, Ghaziabad."
  }
];

export default function TermsPage() {
  return (
    <div className="pt-20 pb-24 overflow-hidden bg-slate-50 min-h-screen">
      {/* Page Header - Immersive Banner */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-brand-sky font-semibold text-sm mb-6 mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
            Legal Information
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-slate-800 mb-6 leading-tight"
          >
            Terms & <span className="text-gradient">Conditions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Please read these terms and conditions carefully before using our website.
          </motion.p>
        </div>
      </section>

      {/* Content Section - Glassmorphic Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-brand-sky">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-sm text-slate-500"
          >
            Last updated: May 2026
          </motion.div>
        </div>
      </section>
    </div>
  );
}
