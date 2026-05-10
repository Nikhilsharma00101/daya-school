"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const photos = [
  { img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=600", label: "Sports Day" },
  { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", label: "Classroom Learning" },
  { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600", label: "Art Workshop" },
  { img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=600", label: "Annual Function" },
  { img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=600", label: "Field Trip" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Moments of Joy" 
          subtitle="A glimpse into the vibrant and happy lives of our little learners." 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
          {/* Main large image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group aspect-square md:aspect-auto md:h-full"
          >
            <Image src={photos[0].img} alt={photos[0].label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                {photos[0].label}
              </span>
            </div>
            
            {/* Play Button Overlay for video illusion */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <PlayCircle className="w-16 h-16 text-white/80" />
            </div>
          </motion.div>

          {/* Smaller images */}
          {photos.slice(1).map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              className="relative rounded-3xl overflow-hidden group aspect-square"
            >
              <Image src={photo.img} alt={photo.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/gallery" className={buttonVariants({ size: "lg", className: "rounded-full px-8 bg-brand-sky hover:bg-brand-sky/90 text-white shadow-md" })}>
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
