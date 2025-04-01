import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: "easeOut"
  }
} as const;

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
} as const;

export const viewportOptions = {
  once: true,
  margin: "-100px",
  amount: 0.3
} as const;

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.5,
    ease: "easeOut"
  }
} as const; 