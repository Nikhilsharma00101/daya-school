"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24 overflow-hidden bg-[#FFFDF9] relative">
      
      {/* Polka Dot Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

      {/* Background Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15rem] md:text-[20rem] font-heading font-bold text-slate-100/50 select-none pointer-events-none z-0">
        HELLO
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-brand-peach font-semibold text-sm mb-6 mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
            We&apos;d Love to Hear From You
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-slate-800 mb-6 leading-tight"
          >
            Let&apos;s Start a <br className="hidden md:block" />
            <span className="text-gradient">Conversation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question about admissions, programs, or just want to see the campus? Drop us a line or visit us.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Reach Us Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-sky/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky">
                  <MapPin className="w-5 h-5" />
                </div>
                The Campus
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                10 Shankar Puri, Sector 9, <br />
                Ghaziabad, India
              </p>
              
              {/* Mini Map Placeholder */}
              <div className="rounded-2xl overflow-hidden h-40 bg-slate-100 flex items-center justify-center relative border border-slate-50">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs text-slate-500 font-medium">Map View</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Call Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-peach-light/30 p-6 rounded-[2rem] border border-transparent hover:border-brand-peach/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-peach shadow-sm mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-slate-800 mb-1">Call Us</h4>
                <p className="text-xs text-slate-600">+91 7065200233</p>
              </motion.div>

              {/* Email Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-mint-light/30 p-6 rounded-[2rem] border border-transparent hover:border-brand-mint/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-mint shadow-sm mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-slate-800 mb-1">Email Us</h4>
                <p className="text-xs text-slate-600 truncate">info@dayaschool.edu.in</p>
              </motion.div>
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-brand-yellow-light/30 p-6 rounded-[2rem] border border-transparent flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-yellow shadow-sm shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-800 mb-0.5 text-sm">School Hours</h4>
                <p className="text-xs text-slate-600">Mon - Fri: 8:00 AM - 2:00 PM</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Form (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100/50 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-sky via-brand-peach to-brand-mint"></div>
              
              <div className="mb-8">
                <h3 className="text-3xl font-heading font-bold text-slate-800 mb-2">Send a Message</h3>
                <p className="text-slate-500 text-sm">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-6 flex-grow flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Name *</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm" placeholder="Full Name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input type="tel" className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm" placeholder="+91 00000 00000" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2 flex-grow flex flex-col">
                  <label className="text-sm font-semibold text-slate-700">Your Message *</label>
                  <textarea className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm resize-none flex-grow min-h-[150px]" placeholder="How can we help you?" required></textarea>
                </div>

                <Button type="button" size="lg" className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg mt-4 shadow-xl flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
