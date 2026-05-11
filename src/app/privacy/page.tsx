"use client";

import { motion } from "framer-motion";
import { Eye, Database, Share2, Lock, Cookie, UserCheck, Sparkles } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as when you fill out an admission inquiry form, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and child's details."
  },
  {
    icon: Eye,
    title: "2. How We Use Information",
    content: "We use the information we collect to process admissions, respond to your inquiries, send newsletters, and improve our website's functionality and user experience."
  },
  {
    icon: Share2,
    title: "3. Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
  },
  {
    icon: Lock,
    title: "4. Data Security",
    content: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."
  },
  {
    icon: Cookie,
    title: "5. Cookies",
    content: "Our website may use 'cookies' to enhance the user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them."
  },
  {
    icon: UserCheck,
    title: "6. Your Consent",
    content: "By using our site, you consent to our website's privacy policy. If we decide to change our privacy policy, we will post those changes on this page."
  }
];

export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-24 overflow-hidden bg-slate-50 min-h-screen">
      {/* Page Header - Compact & Clean */}
      <section className="relative py-12 bg-white overflow-hidden border-b border-slate-100">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-lavender/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-brand-lavender font-semibold text-sm mb-3 mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
            Your Data is Safe
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-3 leading-tight"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We value your privacy and are committed to protecting your personal data.
          </motion.p>
        </div>
      </section>

      {/* Content Section - Glassmorphic Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-brand-lavender">
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
