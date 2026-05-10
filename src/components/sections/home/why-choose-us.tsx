"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { BookOpen, Brain, Music, Shield, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: BookOpen, title: "Modern Teaching Methods", desc: "Interactive and play-based learning approach.", color: "text-brand-sky", bg: "bg-brand-sky-light", shadow: "hover:shadow-brand-sky/20" },
  { icon: Brain, title: "Intellectual Development", desc: "Activities designed to stimulate cognitive skills.", color: "text-brand-peach", bg: "bg-brand-peach-light", shadow: "hover:shadow-brand-peach/20" },
  { icon: Music, title: "Creative & Cultural", desc: "Music, dance, and art programs for expression.", color: "text-brand-lavender", bg: "bg-brand-lavender-light", shadow: "hover:shadow-brand-lavender/20" },
  { icon: Shield, title: "Safe & Positive", desc: "Secure campus with a nurturing atmosphere.", color: "text-brand-mint", bg: "bg-brand-mint-light", shadow: "hover:shadow-brand-mint/20" },
  { icon: Baby, title: "Play Group to UKG", desc: "Comprehensive early education from ages 2 to 6.", color: "text-brand-yellow", bg: "bg-brand-yellow-light", shadow: "hover:shadow-brand-yellow/20" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-sky-light rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-peach-light rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Why Choose Us" 
          subtitle="We provide a premium educational experience designed specifically for the needs of early learners." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === features.length - 1 ? "lg:col-span-3 lg:w-1/3 lg:mx-auto" : ""}
            >
              <Card className={`h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden ${feature.shadow}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-3 group-hover:text-brand-sky transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
                <div className={`h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-${feature.color.split('-')[1]}-400 to-transparent`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
