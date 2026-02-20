"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
}: CardProps) {
  const baseStyles = glass
    ? "backdrop-blur-md bg-white/10 border border-white/20"
    : "bg-white border border-gray-100";

  return (
    <motion.div
      className={cn(
        baseStyles,
        "rounded-2xl p-6 shadow-glass transition-all duration-300",
        hover && "hover:shadow-glass-lg hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
