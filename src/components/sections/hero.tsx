"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

interface HeroProps {
  onOpenContact: () => void;
}

const headerAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const bodyAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-zinc-900 to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={bodyAnimation.initial}
          animate={bodyAnimation.animate}
          transition={{ ...bodyAnimation.transition, delay: 0.1 }}
          className="text-gray-400 uppercase tracking-widest text-sm mb-6 font-display"
        >
          Digital Asset Architecture
        </motion.p>

        <motion.h1
          initial={headerAnimation.initial}
          animate={headerAnimation.animate}
          transition={{ ...headerAnimation.transition, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="headline-gold-effect">We Build Systems</span>
          <br />
          <span className="text-zinc-400">Not Websites</span>
        </motion.h1>

        <motion.div
          initial={bodyAnimation.initial}
          animate={bodyAnimation.animate}
          transition={{ ...bodyAnimation.transition, delay: 0.25 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-xs uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/30 bg-[#d4af37]/5 rounded-full font-display">
            Section 179 Qualified Capital Asset
          </span>
        </motion.div>

        <motion.p
          initial={bodyAnimation.initial}
          animate={bodyAnimation.animate}
          transition={{ ...bodyAnimation.transition, delay: 0.3 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-sans"
        >
          Transform your manual operations into capital digital assets.
          Built for ROI. Built for scale.
        </motion.p>

        <motion.div
          initial={bodyAnimation.initial}
          animate={bodyAnimation.animate}
          transition={{ ...bodyAnimation.transition, delay: 0.4 }}
        >
          <Button onClick={onOpenContact} size="lg">
            Start Asset Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
