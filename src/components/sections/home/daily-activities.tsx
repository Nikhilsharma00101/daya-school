"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Palette, Music, Tent, Laptop, PartyPopper, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const activities = [
  { 
    icon: Palette, 
    title: "Art & Craft", 
    description: "Nurturing creativity through colors, clay, and imagination.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600", 
    color: "from-pink-500 to-rose-500"
  },
  { 
    icon: Music, 
    title: "Music & Dance", 
    description: "Rhythm and movement for physical and emotional expression.",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400", 
    color: "from-purple-500 to-indigo-500"
  },
  { 
    icon: Tent, 
    title: "Outdoor Play", 
    description: "Safe and fun outdoor activities for physical growth.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400", 
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Laptop, 
    title: "Smart Classes", 
    description: "Interactive learning with modern digital tools.",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400", 
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: PartyPopper, 
    title: "Celebrations", 
    description: "Festivals and events to build community and joy.",
    img: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=400", 
    color: "from-orange-500 to-amber-500"
  },
];

export function DailyActivities() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-peach/10 rounded-full filter blur-3xl opacity-30"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Vibrant Daily Activities" 
          subtitle="Learning goes beyond books. Our daily activities are designed to spark creativity, physical strength, and joy." 
          theme="dark"
        />

        {/* Unique Accordion Layout */}
        <div className="mt-16 flex flex-col lg:flex-row h-[600px] gap-4 max-w-6xl mx-auto">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-1 hover:flex-[3] transition-all duration-700 ease-in-out relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image 
                  src={activity.img} 
                  alt={activity.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/90 group-hover:via-slate-900/50 transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                {/* Mobile Collapsed State: Icon and Title side-by-side */}
                <div className="flex lg:hidden items-center gap-4 opacity-100 group-hover:opacity-0 transition-all duration-300 absolute inset-0 p-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white backdrop-blur-md bg-gradient-to-br shadow-lg shrink-0",
                    activity.color
                  )}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {activity.title}
                  </h3>
                </div>

                {/* Desktop & Mobile Expanded Content */}
                <div className="hidden lg:flex flex-col justify-between h-full group-hover:flex group-hover:flex-col group-hover:justify-between w-full">
                  {/* Top: Icon (Hidden on mobile collapsed, shown on hover) */}
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white backdrop-blur-md bg-gradient-to-br shadow-lg shrink-0 hidden lg:flex group-hover:flex",
                    activity.color
                  )}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Bottom: Text */}
                  <div className="relative h-full flex flex-col justify-end mt-4">
                    {/* Vertical Title (Desktop Collapsed) */}
                    <div className="absolute bottom-6 left-0 origin-bottom-left -rotate-90 whitespace-nowrap opacity-100 group-hover:opacity-0 transition-all duration-500 hidden lg:block">
                      <h3 className="text-2xl font-heading font-bold text-white tracking-wide">
                        {activity.title}
                      </h3>
                    </div>
                    
                    {/* Expanded Content (Visible on Hover) */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-slate-200 text-sm max-w-sm leading-relaxed">
                        {activity.description}
                      </p>
                      
                      {/* Sparkle Tag */}
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                        <Sparkles className="w-3 h-3 text-brand-yellow fill-current" />
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
