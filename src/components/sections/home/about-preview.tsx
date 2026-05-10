"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Compass, Smile } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-mint/10 rounded-bl-[10rem] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-peach/10 rounded-tr-[10rem] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side (Left - 6 Columns) - Scrapbook/Collage Style */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px]">
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, rotate: -3 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-10 left-10 w-3/4 h-3/4 bg-white p-4 shadow-xl rounded-2xl z-10"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Students in classroom" 
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-10 right-5 w-1/2 h-1/2 bg-white p-3 shadow-2xl rounded-2xl z-20"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=600" 
                  alt="Child playing" 
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute top-1/4 right-0 bg-brand-yellow text-white p-6 rounded-2xl shadow-lg z-30 transform rotate-12 max-w-[200px]"
            >
              <p className="font-heading font-bold text-2xl">Pure Joy</p>
              <p className="text-xs font-medium">Of laughing, learning, and growing together.</p>
            </motion.div>
          </div>

          {/* Content Side (Right - 6 Columns) */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky-light text-brand-sky font-semibold text-sm mb-4">
                <Smile className="w-4 h-4 fill-current" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 leading-tight">
                A Place Where Childhood is <span className="text-gradient">Celebrated</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-600 text-lg leading-relaxed"
            >
              <p>
                We didn&apos;t set out to build a typical, strict school. We wanted to create a place that feels like a second home—a place filled with color, curiosity, and messes that lead to great discoveries.
              </p>
              <p>
                From your child&apos;s first tentative steps in our Playway program to their confident strides in 8th class, we make sure education is an adventure, not a chore.
              </p>
            </motion.div>

            {/* Unique Grid of Core Values (Human sounding) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Heart className="w-6 h-6 text-brand-peach fill-current" />
                <h4 className="font-bold text-slate-800">Heart First</h4>
                <p className="text-sm text-slate-500">We care for emotions before test scores. A happy child learns faster.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Compass className="w-6 h-6 text-brand-sky" />
                <h4 className="font-bold text-slate-800">Curiosity Driven</h4>
                <p className="text-sm text-slate-500">We don&apos;t just give answers. We encourage kids to ask &apos;why&apos; and &apos;how&apos;.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Sparkles className="w-6 h-6 text-brand-yellow fill-current" />
                <h4 className="font-bold text-slate-800">Messy Learning</h4>
                <p className="text-sm text-slate-500">Art, experiments, and outdoor play. Real learning happens when we get our hands dirty.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <Smile className="w-6 h-6 text-brand-mint fill-current" />
                <h4 className="font-bold text-slate-800">Safe Haven</h4>
                <p className="text-sm text-slate-500">A secure campus where parents can breathe easy and kids can feel free.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <Link href="/about" className={buttonVariants({ size: "lg", className: "rounded-full px-8 bg-brand-sky hover:bg-brand-sky/90 text-white shadow-md hover:shadow-lg transition-all" })}>
                Our Full Story
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
