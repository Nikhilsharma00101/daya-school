"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappNumber = "917065200233"; // without +
  const message = encodeURIComponent("Hello! I'm interested in Daya Little Step Public School admissions.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-8 h-8 text-white fill-current" />
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 -z-10"></span>
    </motion.a>
  );
}
