"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-primary text-white shadow-lg hover:shadow-neon hover:scale-105 active:scale-95",
    secondary:
      "bg-gradient-to-r from-accent-400 to-accent-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    outline:
      "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600",
    ghost:
      "text-primary-600 hover:bg-primary-50 hover:text-primary-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const MotionComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionComponent>
  );
}
