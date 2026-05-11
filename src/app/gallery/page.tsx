"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles, Filter } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Events", "Classroom", "Activities", "Celebrations"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "Sports Day", span: "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2", style: "clean" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Classroom Learning", span: "col-span-1", style: "polaroid" },
  { id: 3, src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Art Workshop", span: "col-span-1 row-span-2", style: "clean" },
  { id: 4, src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800", category: "Celebrations", alt: "Annual Function", span: "col-span-1", style: "polaroid" },
  { id: 5, src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "Field Trip", span: "col-span-2 lg:col-span-2", style: "clean" },
  { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Group Play", span: "col-span-1", style: "polaroid" },
  { id: 7, src: "https://images.unsplash.com/photo-1503454537195-1dc53482d740?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Story Time", span: "col-span-1", style: "clean" },
  { id: 8, src: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=800", category: "Celebrations", alt: "Festival Celebration", span: "col-span-2 lg:col-span-1", style: "polaroid" },
  { id: 9, src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Puzzles", span: "col-span-2 lg:col-span-1", style: "clean" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="relative pt-20 pb-24 min-h-screen bg-slate-50 overflow-hidden">
      {/* Main Page Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/backgrounds/gallery_bg.png"
          alt="Gallery background"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
      </div>

      {/* Page Header - Playful & Dynamic */}
      <section className="bg-white/70 backdrop-blur-md py-12 relative overflow-hidden z-10 border-b border-white/50">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lavender/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-sky/10 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-brand-lavender font-semibold text-sm mb-3 mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
            Captured Memories
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-slate-800 mb-3 leading-tight"
          >
            Our Beautiful <span className="text-gradient">Moments</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A visual journey through the wonderful moments, activities, and memories created at Daya School.
          </motion.p>
        </div>
      </section>

      <section className="py-10 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Creative Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Filter className="w-5 h-5 text-brand-lavender" />
              Filter by Category:
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm",
                    activeCategory === category
                      ? "bg-brand-lavender text-white shadow-brand-lavender/20 shadow-lg scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-100"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Scrapbook Grid - Responsive Mosaic */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
            <AnimatePresence>
              {filteredImages.map((image, idx) => {
                const isPolaroid = image.style === "polaroid";
                
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    key={image.id}
                    className={cn(
                      "relative cursor-pointer group transition-all duration-500",
                      image.span,
                      isPolaroid 
                        ? "bg-white p-3 md:p-4 pb-8 md:pb-12 shadow-lg hover:shadow-xl rounded-sm border border-slate-100 transform hover:-translate-y-2 lg:rotate-1" 
                        : "rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2"
                    )}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    {/* Image Container */}
                    <div className={cn(
                      "relative w-full h-full",
                      isPolaroid ? "rounded-sm overflow-hidden h-[80%] md:h-[85%]" : "rounded-2xl md:rounded-[2rem] overflow-hidden"
                    )}>
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      
                      {/* Overlay for Clean style */}
                      {!isPolaroid && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                              <ZoomIn className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                          </div>
                          
                          <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5">
                            <span className="text-white font-heading font-bold text-sm md:text-lg block mb-0.5 md:mb-1">{image.alt}</span>
                            <span className="text-white/80 text-[10px] md:text-xs px-2 py-0.5 bg-white/20 rounded-full backdrop-blur-sm">{image.category}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Polaroid Label */}
                    {isPolaroid && (
                      <div className="absolute bottom-2 md:bottom-3 left-2 md:left-4 right-2 md:right-4 text-center">
                        <span className="font-heading font-bold text-slate-700 text-xs md:text-sm block truncate">
                          {image.alt}
                        </span>
                        <span className="text-[8px] md:text-[10px] text-brand-lavender font-semibold tracking-wider uppercase mt-0.5 block">
                          {image.category}
                        </span>
                      </div>
                    )}

                    {/* Zoom Icon for Polaroid on hover */}
                    {isPolaroid && (
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <ZoomIn className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-full max-h-[90vh] w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded view"
                fill
                className="object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
