"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS, DISCLAIMER_TEXT, DISCLAIMER_FOOTNOTE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

interface PricingProps {
  onOpenContact: () => void;
}

const headerAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const bodyAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            {...headerAnimation}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Investment Tiers
          </motion.h2>
          <motion.p
            {...bodyAnimation}
            className="text-gray-400 max-w-2xl mx-auto font-sans"
          >
            High-ticket positioning for high-value outcomes.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={cn(
                "relative p-6 rounded-xl border flex flex-col backdrop-blur-md bg-gradient-to-b from-white/5 to-transparent",
                tier.featured
                  ? "border-[#d4af37] ring-1 ring-[#d4af37]/50"
                  : "border-white/10"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#d4af37] text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide font-display">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className="font-serif text-xl font-semibold mb-2 text-white">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold mb-2 text-white">
                {tier.price}
              </p>
              <p className="text-sm mb-2 text-gray-400 font-sans">
                {tier.description}
              </p>
              <p className="text-xs mb-6 text-zinc-500 italic font-sans">
                {tier.retainer}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-gray-300 font-sans">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenContact}
                variant={tier.featured ? "primary" : "outline"}
                className="w-full"
                size="sm"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...bodyAnimation}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-sm text-zinc-400 max-w-3xl mx-auto font-sans font-medium">
            {DISCLAIMER_TEXT}
          </p>
          <p className="text-xs text-zinc-600 max-w-2xl mx-auto font-sans">
            {DISCLAIMER_FOOTNOTE}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
