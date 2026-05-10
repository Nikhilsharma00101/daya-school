"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle 1 */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-brand-sky-light/50 blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Circle 2 */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-48 h-48 rounded-full bg-brand-peach-light/40 blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Circle 3 */}
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-40 h-40 rounded-full bg-brand-mint-light/40 blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      {/* Circle 4 */}
      <motion.div
        className="absolute top-[70%] right-[30%] w-24 h-24 rounded-full bg-brand-lavender-light/50 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
