import { Variants, Transition } from 'framer-motion';

const transition: Transition = {
  duration: 0.8,
  ease: "easeOut"
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const viewportOptions = {
  once: true,
  margin: "-100px",
  amount: 0.1
} as const;

export const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}; 