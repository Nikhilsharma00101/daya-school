"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: "early-years",
    age: "2 - 4 Years",
    title: "Early Years (Playway & Nursery)",
    desc: "A gentle transition from home to a learning environment. We focus on helping children build social skills, independence, and basic motor skills through sensory play.",
    objectives: [
      "Development of fine and gross motor skills",
      "Building vocabulary through stories and rhymes",
      "Encouraging sharing and playing with peers",
      "Sensory exploration with safe materials"
    ],
    schedule: "9:00 AM - 12:00 PM",
    color: "bg-brand-peach",
    lightBg: "bg-brand-peach-light",
    textColor: "text-brand-peach",
    img: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "kindergarten",
    age: "4 - 6 Years",
    title: "Kindergarten (LKG & UKG)",
    desc: "Nurturing curiosity and introducing structured learning. Children engage in activities that promote early literacy, numeracy, and creative expression.",
    objectives: [
      "Introduction to alphabets and phonics",
      "Basic counting and number recognition",
      "Expressive arts and crafts",
      "Understanding the world around them"
    ],
    schedule: "9:00 AM - 12:30 PM",
    color: "bg-brand-sky",
    lightBg: "bg-brand-sky-light",
    textColor: "text-brand-sky",
    img: "https://images.unsplash.com/photo-1503454537195-1dc53482d740?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "primary-school",
    age: "6 - 11 Years",
    title: "Primary School (Class 1st - 5th)",
    desc: "Building a strong academic foundation. The curriculum focuses on language development, logical thinking, and understanding complex concepts through hands-on learning.",
    objectives: [
      "Reading simple words and sentences",
      "Basic addition and subtraction concepts",
      "Scientific thinking and nature exploration",
      "Enhancing communication skills"
    ],
    schedule: "8:30 AM - 1:00 PM",
    color: "bg-brand-mint",
    lightBg: "bg-brand-mint-light",
    textColor: "text-brand-mint",
    img: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "middle-school",
    age: "11 - 14 Years",
    title: "Middle School (Class 6th - 8th)",
    desc: "Preparing for higher education. We emphasize independent learning, advanced reading, math problem-solving, and socio-emotional readiness.",
    objectives: [
      "Fluent reading and creative writing",
      "Advanced mathematical operations",
      "Project-based collaborative learning",
      "Developing leadership and responsibility"
    ],
    schedule: "8:30 AM - 1:30 PM",
    color: "bg-brand-lavender",
    lightBg: "bg-brand-lavender-light",
    textColor: "text-brand-lavender",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600"
  }
];

export default function ProgramsPage() {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-brand-mint-light/30 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 mb-4"
          >
            Our <span className="text-brand-mint">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Structured, play-based learning programs designed to nurture your child at every stage of their early development.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {programs.map((program, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                id={program.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute inset-0 ${program.color} rounded-[3rem] rotate-3 scale-105 opacity-20 blur-xl`}></div>
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white shadow-xl">
                    <Image src={program.img} alt={program.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} glass p-4 rounded-2xl shadow-lg z-10`}>
                    <span className={`text-sm font-bold ${program.textColor} block mb-1`}>Age Group</span>
                    <span className="text-lg font-heading font-bold text-slate-800">{program.age}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`inline-block px-4 py-1.5 rounded-full ${program.lightBg} ${program.textColor} text-sm font-semibold mb-2`}>
                    Timing: {program.schedule}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">{program.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {program.desc}
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <h3 className="font-semibold text-slate-800">Key Learning Objectives:</h3>
                    <ul className="space-y-3">
                      {program.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${program.textColor} shrink-0 mt-0.5`} />
                          <span className="text-slate-600">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link href="/admissions" className={buttonVariants({ size: "lg", className: `rounded-full px-8 text-white ${program.color} hover:opacity-90` })}>
                      Enroll in {program.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
