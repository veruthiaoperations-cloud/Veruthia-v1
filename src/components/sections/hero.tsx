"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import { SPRING_PHYSICS } from "@/lib/utils";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.1 }}
          className="text-gray-400 uppercase tracking-widest text-sm mb-6"
        >
          Digital Asset Architecture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          We Build Systems.
          <br />
          <span className="text-gray-400">Not Websites.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.3 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Transform your manual operations into tax-qualified digital assets.
          Section 179 eligible. Built for ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.4 }}
        >
          <Button onClick={onOpenContact} size="lg">
            Book Your Asset Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
