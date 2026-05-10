"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  {
    id: "early-years",
    num: "01",
    age: "2 - 4 Years",
    title: "Early Years",
    sub: "Playway & Nursery",
    desc: "A soft landing for little ones. We focus on sensory play, making friends, and feeling safe away from home.",
    color: "bg-brand-peach",
    borderColor: "border-brand-peach",
    textColor: "text-brand-peach",
    shape: "rounded-[3rem] rounded-tr-[1rem]",
  },
  {
    id: "kindergarten",
    num: "02",
    age: "4 - 6 Years",
    title: "Kindergarten",
    sub: "LKG & UKG",
    desc: "The magic of letters and numbers begins here. We use games and storytelling to build early literacy and logic.",
    color: "bg-brand-sky",
    borderColor: "border-brand-sky",
    textColor: "text-brand-sky",
    shape: "rounded-[3rem] rounded-bl-[1rem]",
  },
  {
    id: "primary-school",
    num: "03",
    age: "6 - 11 Years",
    title: "Primary School",
    sub: "Class 1st - 5th",
    desc: "Building real skills. Math, science, and languages come alive through hands-on projects and experiments.",
    color: "bg-brand-mint",
    borderColor: "border-brand-mint",
    textColor: "text-brand-mint",
    shape: "rounded-[3rem] rounded-br-[1rem]",
  },
  {
    id: "middle-school",
    num: "04",
    age: "11 - 14 Years",
    title: "Middle School",
    sub: "Class 6th - 8th",
    desc: "Preparing for the world. We focus on critical thinking, leadership, and deep academic understanding.",
    color: "bg-brand-lavender",
    borderColor: "border-brand-lavender",
    textColor: "text-brand-lavender",
    shape: "rounded-[3rem] rounded-tl-[1rem]",
  },
];

export function ProgramsOverview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,theme(colors.slate.200)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.200)_1px,transparent_1px)] [background-size:4rem_4rem]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Our Learning Journey"
          subtitle="From the first steps in Playway to confident strides in 8th Class."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {programs.map((program, idx) => (
            <motion.div
              key={program.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <Link href={`/programs#${program.id}`} className="block h-full">
                {/* Card Container */}
                <div className={`h-full border-2 ${program.borderColor} ${program.shape} p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-slate-100 bg-white hover:-translate-y-2`}>

                  {/* Top Section */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-5xl font-heading font-bold opacity-20 ${program.textColor}`}>
                        {program.num}
                      </span>
                      <div className={`px-4 py-1.5 rounded-full text-xs font-bold text-white ${program.color}`}>
                        {program.age}
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-slate-800 mb-1">
                      {program.title}
                    </h3>
                    <p className={`text-sm font-semibold ${program.textColor} mb-4`}>
                      {program.sub}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {program.desc}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400">View Details</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${program.color} group-hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Decorative Sparkle for hover */}
              <div className="absolute -top-3 -right-3 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-6 h-6 fill-current" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/programs" className={buttonVariants({ size: "lg", className: "rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 text-lg shadow-xl" })}>
            Explore All Programs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
