"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS, DISCLAIMER_TEXT } from "@/lib/constants";
import { SPRING_PHYSICS, cn } from "@/lib/utils";
import Button from "@/components/ui/button";

interface PricingProps {
  onOpenContact: () => void;
}

export default function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_PHYSICS}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Investment Tiers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-ticket positioning for high-value outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative p-6 rounded-xl border flex flex-col w-full max-w-full",
                tier.featured
                  ? "bg-[#050505] border-zinc-600"
                  : "bg-zinc-900/50 border-white/10"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-zinc-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className="font-playfair text-xl font-semibold mb-2 text-white">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold mb-2 text-white">
                {tier.price}
              </p>
              <p className="text-sm mb-2 text-gray-400">
                {tier.description}
              </p>
              <p className="text-xs mb-6 text-zinc-500 italic">
                {tier.retainer}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-gray-300">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-zinc-500 max-w-2xl mx-auto">
            {DISCLAIMER_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
