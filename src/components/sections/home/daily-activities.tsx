"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Palette, Music, Tent, Laptop, PartyPopper } from "lucide-react";
import Image from "next/image";

const activities = [
  { icon: Palette, title: "Art & Craft", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { icon: Music, title: "Music & Dance", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { icon: Tent, title: "Outdoor Play", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { icon: Laptop, title: "Smart Classes", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
  { icon: PartyPopper, title: "Celebrations", img: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=400", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
];

export function DailyActivities() {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Vibrant Daily Activities" 
          subtitle="Learning goes beyond books. Our daily activities are designed to spark creativity, physical strength, and joy." 
          theme="dark"
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto mt-12 auto-rows-[200px]">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${activity.colSpan} ${activity.rowSpan}`}
            >
              <Image 
                src={activity.img} 
                alt={activity.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white backdrop-blur-md">
                  <activity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-yellow transition-colors">
                  {activity.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
