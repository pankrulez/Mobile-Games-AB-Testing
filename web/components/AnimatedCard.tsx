"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay
      }}
      whileHover={{
        y: -6,
        scale: 1.03
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}