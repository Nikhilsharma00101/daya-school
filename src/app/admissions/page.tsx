"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, CheckCircle, CalendarCheck, HelpCircle, Star, Sparkles, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { 
    icon: ClipboardList, 
    title: "Let's Connect", 
    desc: "Fill out the quick form below. It takes less than 2 minutes and helps us get to know your family.", 
    color: "text-brand-sky", 
    bg: "bg-brand-sky-light",
    num: "01"
  },
  { 
    icon: CalendarCheck, 
    title: "Step Inside", 
    desc: "Come visit us! See the classrooms, hear the laughter, and feel the vibe of our school.", 
    color: "text-brand-peach", 
    bg: "bg-brand-peach-light",
    num: "02"
  },
  { 
    icon: FileText, 
    title: "The Essentials", 
    desc: "Just a few basic documents to make things official. No mountain of confusing paperwork.", 
    color: "text-brand-yellow", 
    bg: "bg-brand-yellow-light",
    num: "03"
  },
  { 
    icon: Smile, 
    title: "Welcome Home", 
    desc: "Secure the spot and get ready for a wonderful journey of growth and joy.", 
    color: "text-brand-mint", 
    bg: "bg-brand-mint-light",
    num: "04"
  },
];

export default function AdmissionsPage() {
  return (
    <div className="pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      
      {/* Page Header - Playful & Inviting */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-brand-peach/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-brand-sky/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-brand-peach font-semibold text-sm mb-6 mx-auto"
          >
            <Star className="w-4 h-4 fill-current text-brand-yellow" />
            Admissions Open for 2026–27
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-slate-800 mb-6 leading-tight max-w-4xl mx-auto"
          >
            Start Your Child&apos;s <br className="hidden lg:block" />
            <span className="text-gradient">Brightest Chapter</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We make joining our family as simple and stress-free as possible. Here is how we do it, step by step.
          </motion.p>
        </div>
      </section>

      {/* Process Section - Board Game / Path Style */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="relative max-w-5xl mx-auto">
            
            {/* The Curved Path Line (Desktop) */}
            <svg className="absolute top-1/2 left-0 w-full h-24 text-slate-200 hidden lg:block -translate-y-1/2 z-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M 0 50 Q 250 0 500 50 T 1000 50" stroke="currentColor" strokeWidth="4" strokeDasharray="10, 10" fill="none"/>
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div className={`w-24 h-24 rounded-full ${step.bg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative cursor-pointer`}>
                    {idx === 3 ? (
                      <Smile className={`w-10 h-10 ${step.color} fill-current`} />
                    ) : (
                      <step.icon className={`w-10 h-10 ${step.color}`} />
                    )}
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center font-bold text-sm shadow-md border-2 border-slate-50">
                      {step.num}
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-slate-800 text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria & Form Split Section */}
      <section className="py-24 relative">
        
        {/* Background Sparkles */}
        <div className="absolute top-20 right-20 text-brand-yellow/30 hidden lg:block">
          <Sparkles className="w-12 h-12 fill-current" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
            
            {/* Left Column - Info (5 Columns) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm"
              >
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-peach">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  Age Requirements
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <span className="font-semibold text-slate-700">Early Years (Playway/Nursery)</span>
                    <span className="text-slate-600">2 - 4 Years</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <span className="font-semibold text-slate-700">Kindergarten (LKG/UKG)</span>
                    <span className="text-slate-600">4 - 6 Years</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                    <span className="font-semibold text-slate-700">Primary (Class 1st - 5th)</span>
                    <span className="text-slate-600">6 - 11 Years</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Middle (Class 6th - 8th)</span>
                    <span className="text-slate-600">11 - 14 Years</span>
                  </li>
                </ul>
              </motion.div>

              {/* Documents */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-sky-light/20 p-8 rounded-[2.5rem] border border-transparent"
              >
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-sky flex items-center justify-center text-white">
                    <FileText className="w-5 h-5" />
                  </div>
                  The Paperwork
                </h3>
                <p className="text-sm text-slate-600 mb-4">Just the basics to get started:</p>
                <ul className="space-y-3">
                  {[
                    "Child's Birth Certificate",
                    "Aadhar Card (Child & Parents)",
                    "A few passport size photos",
                    "Previous school TC (if applicable)"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Form (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-sky via-brand-peach to-brand-mint"></div>
                
                <h3 className="text-3xl font-heading font-bold text-slate-800 mb-2">Say Hello</h3>
                <p className="text-slate-500 mb-8 text-sm">Drop us a message and we&apos;ll guide you through the rest.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Child&apos;s Name *</label>
                      <input type="text" className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm" placeholder="Child's Name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Applying For *</label>
                      <select className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors bg-white text-slate-700 text-sm" required>
                        <option value="">Select Class</option>
                        <option value="playway">Playway / Nursery</option>
                        <option value="kg">Kindergarten (LKG/UKG)</option>
                        <option value="primary">Primary (Class 1-5)</option>
                        <option value="middle">Middle School (Class 6-8)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Any questions for us?</label>
                    <textarea className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors text-sm resize-none" rows={4} placeholder="Ask anything..."></textarea>
                  </div>

                  <Button type="button" size="lg" className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg mt-4 shadow-xl">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
