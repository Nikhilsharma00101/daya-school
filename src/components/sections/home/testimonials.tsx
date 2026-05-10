"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of Aarav (UKG)",
    content: "Daya Little Step has been a wonderful experience for my child. The teachers are incredibly caring and the environment is very safe. Aarav has grown so much in confidence!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
    rotation: "rotate-2",
    bg: "bg-brand-sky-light/50"
  },
  {
    name: "Rahul Verma",
    role: "Father of Riya (Nursery)",
    content: "We are amazed by the creative teaching methods. Riya loves going to school every day. The balance between play and learning is just perfect.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    rotation: "rotate--3",
    bg: "bg-brand-peach-light/50"
  },
  {
    name: "Anita Gupta",
    role: "Mother of Vihaan (Play Group)",
    content: "The best decision we made for our son's early education. The staff is highly professional and they genuinely care about each child's holistic development.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
    rotation: "rotate-1",
    bg: "bg-brand-yellow-light/50"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FFFDF9] relative overflow-hidden">
      
      {/* Polka Dot Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-100 text-brand-peach font-semibold text-xs mb-3">
            <Heart className="w-3 h-3 fill-current" />
            Parent Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-4">What Parents Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Real stories from families who have seen their children thrive in our care.
          </p>
        </div>

        {/* Scrapbook / Notice Board Layout */}
        <div className="relative max-w-6xl mx-auto mt-12 min-h-[500px] flex flex-col md:flex-row gap-12 items-center justify-center">
          
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`w-full md:w-[320px] bg-white p-8 rounded-3xl shadow-xl shadow-slate-100/50 border border-slate-50 relative ${testimonial.rotation} hover:rotate-0 transition-transform duration-500 hover:shadow-2xl hover:z-20 cursor-pointer`}
            >
              {/* "Tape" or "Pin" effect at the top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/80 backdrop-blur-sm border border-slate-100/50 shadow-sm rounded-sm origin-center -rotate-3" />
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-100">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed text-sm mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
                <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-sm">{testimonial.name}</h4>
                  <p className="text-[11px] text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Corner Doodle decoration */}
              {idx === 1 && (
                <div className="absolute -bottom-4 -right-4 text-brand-peach">
                  <Sparkles className="w-6 h-6 fill-current" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Decorative Background Elements behind the "Scrapbook" */}
          <div className="absolute -top-10 left-1/4 text-brand-yellow/20 -z-10 hidden lg:block">
            <Sparkles className="w-16 h-16 fill-current" />
          </div>
          <div className="absolute bottom-10 right-1/4 text-brand-sky/20 -z-10 hidden lg:block">
            <Heart className="w-12 h-12 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
