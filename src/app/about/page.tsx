"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Compass, Smile, Target, Lightbulb, Star, Cloud, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white relative">
      
      {/* Global Background Doodles */}
      <div className="absolute top-40 left-10 text-brand-peach/20 -rotate-12 hidden lg:block">
        <Sun className="w-16 h-16" strokeWidth={1} />
      </div>
      <div className="absolute top-1/3 right-10 text-brand-sky/20 rotate-12 hidden lg:block">
        <Cloud className="w-20 h-20" strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/4 left-20 text-brand-yellow/20 rotate-45 hidden lg:block">
        <Star className="w-12 h-12 fill-current" />
      </div>

      {/* Page Header - Playful & Wide */}
      <section className="relative py-24 overflow-hidden">
        {/* Massive background text for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[18rem] font-heading font-bold text-slate-100/70 select-none pointer-events-none -z-10">
          STORY
        </div>
        
        <div className="absolute top-10 left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-brand-sky/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-brand-sky font-semibold text-sm mb-6 mx-auto"
          >
            <Smile className="w-4 h-4 fill-current text-brand-yellow" />
            Get to know us
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-slate-800 mb-6 leading-tight max-w-5xl mx-auto relative"
          >
            A New Standard in <span className="text-gradient">Nurturing Young Minds</span>
            
            {/* Hand-drawn squiggle under title */}
            <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-3 text-brand-peach" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M 0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-8"
          >
            Daya School started with a clear purpose: to create a school that we would want our own children to attend. We combine modern educational research with a deep understanding of what children need to thrive.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Extreme Creative Collage */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visuals Collage (Left - 6 Columns) */}
            <div className="lg:col-span-6 relative h-[500px] md:h-[600px] flex items-center justify-center">
              
              {/* Main Image (Organic Blob) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                  alt="School environment" 
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlapping Image 2 (Circle) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-10 right-5 md:right-10 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-6 border-white shadow-xl z-30"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=600" 
                  alt="Child playing" 
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlapping Image 3 (Tilted Square) */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-10 left-5 md:left-10 w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-6 border-white shadow-xl z-10 rotate-12"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Classroom" 
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Orbit effect background */}
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-2 border-dashed border-slate-200 rounded-full z-0 pointer-events-none" />
              
              {/* Doodle Arrow pointing to text */}
              <div className="absolute top-0 right-0 text-brand-yellow hidden lg:block">
                <svg className="w-16 h-16 transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Content (Right - 6 Columns) */}
            <div className="lg:col-span-6 space-y-6 text-slate-600 text-lg leading-relaxed relative">
              
              {/* Decorative background shape for text */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-sky/5 rounded-full blur-xl -z-10" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-peach/10 text-brand-peach font-semibold text-sm">
                <Heart className="w-4 h-4 fill-current" />
                Our Vision of Care
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">Built for the Future</h2>
              <p>
                Daya Little Step Public School was founded with a clear purpose: to create a school that we would want our own children to attend. We combine modern educational research with a deep understanding of what children need to thrive.
              </p>
              <p>
                While our campus is fresh and modern, our commitment to quality is absolute. We offer a complete educational journey from Playway all the way to 8th Class, designed to prepare students for the world with confidence, creativity, and character.
              </p>
              <p>
                We don&apos;t follow rigid, outdated methods. We look at each child as an individual. Some learn by doing, some by listening, and some by drawing. We make space for all of them, ensuring a high-quality, professional standard of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Glassmorphic Floating Cards */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs for glassmorphism */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-peach/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] border-2 border-white hover:border-brand-peach/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-3xl bg-brand-peach flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-peach/20 transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-4">Our Simple Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To create a safe, warm space where kids can be themselves while learning skills that last a lifetime. We care for emotions first, knowing that a happy child is a natural learner.
                </p>
              </div>
              <div className="absolute top-5 right-5 text-brand-peach/5 text-8xl font-bold font-heading group-hover:scale-110 transition-transform select-none">M</div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] border-2 border-white hover:border-brand-sky/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-3xl bg-brand-sky flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-sky/20 transform rotate-6 group-hover:rotate-0 transition-transform">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-4">Where We&apos;re Headed</h3>
                <p className="text-slate-600 leading-relaxed">
                  To raise a generation of kind, curious, and confident children who aren&apos;t afraid to make mistakes. We want our students to leave us ready to think for themselves and help others.
                </p>
              </div>
              <div className="absolute top-5 right-5 text-brand-sky/5 text-8xl font-bold font-heading group-hover:scale-110 transition-transform select-none">V</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Glassmorphic Bento Grid with Icons outside */}
      <section className="py-24 relative">
        {/* Decorative squiggle across section */}
        <div className="absolute top-0 left-0 w-full overflow-hidden line-clamp-1 text-slate-100 select-none pointer-events-none">
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-4">What We Live By</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">These aren&apos;t just words on a wall; this is how we teach every day.</p>
            
            {/* Doodle Sparkle */}
            <div className="absolute top-0 right-1/4 text-brand-yellow hidden md:block">
              <Sparkles className="w-8 h-8 fill-current" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[320px] group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-peach/10 rounded-full group-hover:scale-150 transition-transform" />
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-peach/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-brand-peach fill-current" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Heart First</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We hug, we listen, and we dry tears. Emotional safety comes before learning numbers.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-peach relative z-10">01 / VALUES</div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[320px] md:col-span-2 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-sky/10 rounded-full group-hover:scale-150 transition-transform" />
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6 text-brand-sky" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Always Asking &quot;Why&quot;</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don&apos;t hand out answers for memorization. We encourage curiosity. Why is the sky blue? How do plants drink water? We find out together through experiments and messy play.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-sky relative z-10">02 / VALUES</div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[320px] md:col-span-2 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-yellow/10 rounded-full group-hover:scale-150 transition-transform" />
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-brand-yellow fill-current" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Messy is Good</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Finger painting, mud kitchens, and science spills. Real learning is hands-on and often messy. We embrace the mess because it means discovery is happening.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-yellow relative z-10">03 / VALUES</div>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[320px] group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-mint/10 rounded-full group-hover:scale-150 transition-transform" />
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-mint/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smile className="w-6 h-6 text-brand-mint fill-current" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">No Fear of Mistakes</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mistakes are just steps on the way to learning. We celebrate tries, not just perfect results. This builds confidence that lasts.
                </p>
              </div>
              <div className="text-xs font-bold text-brand-mint relative z-10">04 / VALUES</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-brand-peach/20 rounded-full blur-xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-sky/20 rounded-full blur-xl" />
            
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Want to See it in Action?</h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 relative z-10">
              Words only say so much. Come visit us and see the smiles, the learning, and the messes for yourself.
            </p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full bg-brand-sky hover:bg-brand-sky/90 text-white px-8 h-14 text-lg shadow-xl relative z-10" })}>
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
