"use client";
import { motion, useReducedMotion } from "motion/react";

// Aparición suave al entrar en viewport. Respeta prefers-reduced-motion.
export default function Reveal({ children, delay = 0, className = "", y = 28 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
