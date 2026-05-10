"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({ title, subtitle, alignment = "center", theme = "light", className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", alignment === "center" && "text-center", alignment === "right" && "text-right", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={cn("text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4", theme === "dark" ? "text-white" : "text-slate-800")}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn("text-lg max-w-2xl", alignment === "center" && "mx-auto", theme === "dark" ? "text-slate-300" : "text-slate-600")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
