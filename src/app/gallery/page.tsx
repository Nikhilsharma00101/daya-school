"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Events", "Classroom", "Activities", "Celebrations"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "Sports Day" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Classroom Learning" },
  { id: 3, src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Art Workshop" },
  { id: 4, src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800", category: "Celebrations", alt: "Annual Function" },
  { id: 5, src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "Field Trip" },
  { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Group Play" },
  { id: 7, src: "https://images.unsplash.com/photo-1503454537195-1dc53482d740?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Story Time" },
  { id: 8, src: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=800", category: "Celebrations", alt: "Festival Celebration" },
  { id: 9, src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Puzzles" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-10 pb-24 min-h-screen">
      <section className="bg-brand-lavender-light/30 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 mb-4"
          >
            Photo <span className="text-brand-lavender">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A visual journey through the wonderful moments and memories created at Daya Little Step.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-lavender text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid (CSS Columns) */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={image.id}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="glass px-4 py-2 rounded-xl border border-white/20 flex justify-between items-center">
                      <span className="text-white font-medium text-sm">{image.alt}</span>
                      <span className="text-white/80 text-xs px-2 py-1 bg-white/20 rounded-md">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
