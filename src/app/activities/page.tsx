"use client";

import { motion } from "framer-motion";
import { Palette, Music, Tent, Laptop, PartyPopper, Users, TreeDeciduous, Activity } from "lucide-react";
import Image from "next/image";

const allActivities = [
  { icon: Palette, title: "Art & Craft", desc: "Painting, origami, and clay modeling to boost fine motor skills.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", color: "bg-brand-peach" },
  { icon: Music, title: "Music & Dance", desc: "Rhythm and movement exercises to improve coordination and joy.", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", color: "bg-brand-lavender" },
  { icon: Tent, title: "Outdoor Play", desc: "Swings, slides, and sandpit fun to build physical strength.", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800", color: "bg-brand-mint" },
  { icon: Laptop, title: "Smart Classes", desc: "Interactive digital learning for early cognitive development.", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", color: "bg-brand-sky" },
  { icon: PartyPopper, title: "Festival Celebrations", desc: "Learning about cultures and traditions through festive events.", img: "https://images.unsplash.com/photo-1530103862676-de88b505ffce?auto=format&fit=crop&q=80&w=800", color: "bg-brand-yellow" },
  { icon: Users, title: "Group Activities", desc: "Team games and collaborative projects to foster social skills.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", color: "bg-brand-peach" },
  { icon: TreeDeciduous, title: "Nature Exploration", desc: "Gardening and nature walks to connect with the environment.", img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=800", color: "bg-brand-mint" },
  { icon: Activity, title: "Yoga & Mindfulness", desc: "Simple stretching and breathing exercises for kids.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", color: "bg-brand-sky" },
];

export default function ActivitiesPage() {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-brand-yellow-light/30 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 mb-4"
          >
            Daily <span className="text-brand-yellow">Activities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A perfect blend of fun and learning. Explore the wide range of activities that keep our students engaged and happy.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allActivities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-md">
                  <Image src={activity.img} alt={activity.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${activity.color} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2 group-hover:text-brand-sky transition-colors">{activity.title}</h3>
                <p className="text-slate-600 leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
