"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PlayCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  { img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=600", label: "Sports Day", rotate: "lg:-rotate-3", translate: "lg:translate-y-4", isVideo: true },
  { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", label: "Classroom Learning", rotate: "lg:rotate-2", translate: "lg:-translate-y-4" },
  { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600", label: "Art Workshop", rotate: "lg:-rotate-1", translate: "lg:translate-y-2" },
  { img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=600", label: "Annual Function", rotate: "lg:rotate-3", translate: "lg:-translate-y-2" },
  { img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600", label: "Field Trip", rotate: "lg:-rotate-2", translate: "lg:translate-y-6" },
];

export function GalleryPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8; // scroll by ~one card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Wooden Desk Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image 
          src="/images/backgrounds/wood_bg.png"
          alt="Wooden background"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Doodles or Orbs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-brand-yellow/10 rounded-full filter blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-brand-peach/10 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Moments of Joy" 
          subtitle="A glimpse into the vibrant and happy lives of our little learners." 
        />

        {/* Carousel Controls (Mobile Only) */}
        <div className="flex justify-end gap-3 md:hidden mt-6 mb-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-sky shadow-sm transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-brand-sky shadow-sm transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scattered Polaroid Layout */}
        <div 
          ref={scrollRef}
          className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 justify-start md:justify-center gap-6 md:gap-12 lg:gap-14 max-w-6xl mx-auto mt-4 md:mt-20 px-4 md:px-0" 
          style={{ scrollbarWidth: "none" }}
        >
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "relative bg-white p-3 md:p-4 pb-6 md:pb-8 shadow-xl hover:shadow-2xl rounded-2xl border border-slate-100 transform transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-20 cursor-pointer shrink-0 snap-center w-[80vw] sm:w-[300px]",
                photo.rotate,
                photo.translate
              )}
            >
              {/* Tape Effect on some cards */}
              {idx % 2 === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-sm border border-white/50 -rotate-3 z-10 shadow-sm flex items-center justify-center text-[10px] text-slate-400 font-bold tracking-wider">
                  MEMORIES
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <Image 
                  src={photo.img} 
                  alt={photo.label} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Video Play Icon */}
                {photo.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-peach shadow-lg">
                      <PlayCircle className="w-7 h-7 fill-current" />
                    </div>
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="text-center px-2">
                <p className="font-heading font-bold text-slate-700 text-lg">
                  {photo.label}
                </p>
                <div className="flex justify-center items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3 text-brand-yellow fill-current" />
                  <span className="text-xs text-slate-400 font-medium">Capture</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/gallery" 
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-8 bg-brand-sky hover:bg-brand-sky/90 text-white shadow-lg hover:-translate-y-0.5 transition-all"
            )}
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
