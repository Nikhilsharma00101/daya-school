"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Star, Heart, Sparkles, BookOpen, Music, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-brand-sky-light/20 via-white to-white">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-peach/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-brand-yellow/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content (Left Side - 5 Columns) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-brand-sky font-semibold text-sm mb-6 mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
                Admissions Open 2026–27
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 leading-[1.1]">
                Where Every <span className="text-gradient">Little Step</span> Leads to a Big Future
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Quality education from Playway to 8th Class. We nurture curiosity, creativity, and confidence in a safe, loving environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/admissions" className={buttonVariants({ size: "lg", className: "rounded-full h-14 px-8 text-lg bg-brand-sky hover:bg-brand-sky/90 text-white shadow-lg shadow-brand-sky/20 hover:scale-105 transition-transform" })}>
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full h-14 px-8 text-lg border-2 border-brand-peach text-brand-peach hover:bg-brand-peach/10 hover:text-brand-peach hover:scale-105 transition-transform" })}>
                Take a Tour
              </Link>
            </motion.div>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-peach fill-current" />
                Loving Care
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-yellow fill-current" />
                Top Rated
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-sky" />
                Modern Curriculum
              </div>
            </motion.div>
          </div>

          {/* Creative Collage (Right Side - 7 Columns) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Center Large Image - Shaped like a flower or smooth blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }} // Organic blob shape
            >
              <Image 
                src="/images/hero-section/student-children.png" 
                alt="Children learning at Daya School" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping Image 2 - Circular */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-10 right-10 md:right-20 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-6 border-white shadow-xl z-30"
            >
              <Image 
                src="/images/hero-section/student-puzzle.png" 
                alt="Child solving puzzle" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping Image 3 - Rounded Square tilted */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-10 left-10 md:left-20 w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-6 border-white shadow-xl z-10 rotate-12"
            >
              <Image 
                src="/images/hero-section/students-blocks.png" 
                alt="Children playing with blocks" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Orbiting Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-white shadow-lg z-40"
            >
              <Music className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-brand-mint rounded-full flex items-center justify-center text-white shadow-lg z-40"
            >
              <Palette className="w-7 h-7" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-1/2 left-10 w-10 h-10 bg-brand-peach rounded-full flex items-center justify-center text-white shadow-lg z-40"
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>

            {/* Background dashed circle for orbit effect */}
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border-2 border-dashed border-slate-200 rounded-full z-0 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
