"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Music, Tent, Laptop, PartyPopper, Users, TreeDeciduous, Activity, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const allActivities = [
  { 
    icon: Palette, 
    title: "Art & Craft", 
    desc: "Painting, origami, and clay modeling to boost fine motor skills and unleash inner creativity. Children learn to express their emotions through colors.", 
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", 
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50"
  },
  { 
    icon: Music, 
    title: "Music & Dance", 
    desc: "Rhythm and movement exercises to improve coordination, balance, and pure joy. We introduce children to various instruments and dance styles.", 
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", 
    color: "from-purple-500 to-indigo-500",
    bgLight: "bg-purple-50"
  },
  { 
    icon: Tent, 
    title: "Outdoor Play", 
    desc: "Swings, slides, and sandpit fun to build physical strength and social bonds. Safe and monitored play areas ensure risk-free exploration.", 
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800", 
    color: "from-green-500 to-emerald-500",
    bgLight: "bg-green-50"
  },
  { 
    icon: Laptop, 
    title: "Smart Classes", 
    desc: "Interactive digital learning for early cognitive development. We use age-appropriate educational games and visual storytelling.", 
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", 
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50"
  },
  { 
    icon: PartyPopper, 
    title: "Festival Celebrations", 
    desc: "Learning about cultures and traditions through festive events. We celebrate all major festivals to build a sense of community and inclusivity.", 
    img: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=800", 
    color: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50"
  },
  { 
    icon: Users, 
    title: "Group Activities", 
    desc: "Team games and collaborative projects to foster social skills, sharing, and empathy. Children learn to work together towards common goals.", 
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", 
    color: "from-teal-500 to-emerald-500",
    bgLight: "bg-teal-50"
  },
  { 
    icon: TreeDeciduous, 
    title: "Nature Exploration", 
    desc: "Gardening and nature walks to connect with the environment. Children learn about plants, insects, and the importance of taking care of our planet.", 
    img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=800", 
    color: "from-lime-500 to-green-500",
    bgLight: "bg-lime-50"
  },
  { 
    icon: Activity, 
    title: "Yoga & Mindfulness", 
    desc: "Simple stretching and breathing exercises designed specifically for kids. Helps in improving focus, reducing anxiety, and building body awareness.", 
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", 
    color: "from-sky-500 to-indigo-500",
    bgLight: "bg-sky-50"
  },
];

export default function ActivitiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pt-20 pb-24 overflow-hidden bg-slate-50">
      {/* Page Header - Immersive Banner */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-peach/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-brand-sky font-semibold text-sm mb-6 mx-auto"
          >
            <Sparkles className="w-4 h-4 fill-current text-brand-yellow" />
            Beyond Academics
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-slate-800 mb-6 leading-tight"
          >
            A World of <span className="text-gradient">Exploration & Play</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A perfect blend of fun and learning. Explore the wide range of activities that keep our students engaged, happy, and growing.
          </motion.p>
        </div>
      </section>

      {/* Activities List - Overlapping Magazine Layout (Desktop) */}
      <section className="py-16 hidden lg:block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-32">
            {allActivities.map((activity, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={cn(
                    "flex flex-col lg:flex-row items-center gap-8 lg:gap-0",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-7/12 relative group h-[300px] md:h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 rounded-[2.5rem]"></div>
                    <Image 
                      src={activity.img} 
                      alt={activity.title} 
                      fill 
                      className="object-cover rounded-[2.5rem] shadow-xl group-hover:scale-102 transition-transform duration-700" 
                    />
                    <div className={cn(
                      "absolute -z-10 w-full h-full rounded-[2.5rem] top-4",
                      isEven ? "-left-4" : "left-4",
                      activity.bgLight
                    )}></div>
                  </div>

                  {/* Text Block (Overlapping) */}
                  <div className={cn(
                    "w-full lg:w-5/12 bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-50 z-20 relative transition-transform duration-500 hover:-translate-y-2",
                    isEven ? "lg:-ml-20" : "lg:-mr-20"
                  )}>
                    <div className="absolute top-5 right-5 text-slate-100 text-7xl font-heading font-bold select-none">
                      0{idx + 1}
                    </div>

                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center text-white backdrop-blur-md bg-gradient-to-br shadow-lg mb-6",
                      activity.color
                    )}>
                      <activity.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-4">
                      {activity.title}
                    </h3>
                    
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                      {activity.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-sky hover:text-brand-sky/80 cursor-pointer group">
                      Learn More 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities List - Interactive Hub Layout (Mobile/Tablet) */}
      <section className="py-16 lg:hidden">
        <div className="container mx-auto px-4">
          {/* Horizontal Scrollable Icons Hub */}
          <div className="flex overflow-x-auto gap-4 pb-6 justify-start scrollbar-hide px-2">
            {allActivities.map((activity, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white backdrop-blur-md bg-gradient-to-br shadow-lg shrink-0 transition-all duration-300",
                  activity.color,
                  activeIndex === idx 
                    ? "ring-4 ring-offset-2 ring-brand-sky scale-105" 
                    : "opacity-60 scale-95 hover:opacity-100"
                )}
              >
                <activity.icon className="w-6 h-6" />
              </button>
            ))}
          </div>

          {/* Active Content Card */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100"
          >
            <div className="relative h-[250px]">
              <Image 
                src={allActivities[activeIndex].img} 
                alt={allActivities[activeIndex].title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Huge Watermark Number */}
              <div className="absolute top-5 right-5 text-white/30 text-6xl font-heading font-bold select-none">
                0{activeIndex + 1}
              </div>

              {/* Title on Image for better space utilization */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  {allActivities[activeIndex].title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                  <Heart className="w-3.5 h-3.5 fill-current text-brand-peach" />
                  Development Focus
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {allActivities[activeIndex].desc}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-sky hover:text-brand-sky/80 cursor-pointer group">
                  Detailed Program 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
                
                {/* Visual Indicator of count */}
                <span className="text-sm text-slate-400 font-medium">
                  {activeIndex + 1} / {allActivities.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Fun Fact / Highlight Banner */}
      <section className="py-12 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-sky to-indigo-600 text-white p-10 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
            
            <Heart className="w-10 h-10 text-white/50 fill-current mx-auto mb-6" />
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 relative z-10">
              Every Activity is Designed with Purpose
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
              We don&apos;t just keep children busy. Every activity on this page is carefully selected by our educators to support brain development, motor skills, and social-emotional growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
