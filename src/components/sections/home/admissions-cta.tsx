"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Send, Sparkles, Star, Heart, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export function AdmissionsCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Glowing Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-peach/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Inner Glowing Border or Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
            
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 text-brand-peach opacity-30"
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 text-brand-sky opacity-30"
            >
              <Star className="w-10 h-10 fill-current" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-5 text-brand-lavender opacity-20 hidden md:block"
            >
              <Heart className="w-8 h-8 fill-current" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">
              {/* Text Content */}
              <div className="lg:col-span-3 text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-bold mb-6 border border-white/20 shadow-sm">
                  <GraduationCap className="w-4 h-4" />
                  ADMISSIONS OPEN 2026–27
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Give Your Child the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-peach to-brand-yellow">Best Start</span>
                </h2>
                <p className="text-lg text-slate-300 mb-0 max-w-2xl leading-relaxed">
                  Join the Daya Little Step family today. We are currently accepting applications for the upcoming academic session. Spaces are limited for early years!
                </p>
              </div>

              {/* CTA Actions */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <Link 
                  href="/admissions" 
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-2xl h-16 px-8 text-lg font-bold bg-gradient-to-r from-brand-peach to-brand-yellow text-slate-900 hover:scale-[1.02] transition-all duration-300 border-none shadow-xl shadow-brand-peach/20 flex items-center justify-center gap-2"
                  )}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-2xl h-16 px-8 text-lg font-bold border-2 border-white bg-white/10 text-white hover:bg-white/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  )}
                >
                  Contact School
                  <Send className="w-5 h-5" />
                </Link>
                <p className="text-sm text-slate-400 text-center mt-2">
                  Have questions? Talk to our admissions team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
