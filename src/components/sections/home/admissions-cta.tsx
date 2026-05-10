"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

export function AdmissionsCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sky via-brand-lavender to-brand-peach"></div>
      
      {/* Decorative Overlays */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6 border border-white/30 shadow-sm">
              Admissions Open 2026–27
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Give Your Child the <br className="hidden md:block" /> Best Start
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Daya Little Step family today. We are currently accepting applications for the upcoming academic session. Spaces are limited!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admissions" className={buttonVariants({ size: "lg", className: "rounded-full h-14 px-8 text-lg bg-white text-brand-sky hover:bg-slate-50 shadow-xl w-full sm:w-auto" })}>
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full h-14 px-8 text-lg border-2 border-white/50 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto" })}>
                Contact School
                <Send className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
