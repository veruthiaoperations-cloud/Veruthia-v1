"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";
import { SPRING_PHYSICS, cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import DisclaimerBanner from "@/components/ui/disclaimer-banner";

interface PricingProps {
  onOpenContact: () => void;
}

export default function Pricing({ onOpenContact }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-black">
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
                "p-6 rounded-xl border flex flex-col w-full max-w-full",
                tier.featured
                  ? "bg-white text-black border-white"
                  : "bg-gray-900/50 border-white/10"
              )}
            >
              <h3
                className={cn(
                  "font-playfair text-xl font-semibold mb-2",
                  tier.featured ? "text-black" : "text-white"
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "text-3xl font-bold mb-2",
                  tier.featured ? "text-black" : "text-white"
                )}
              >
                {tier.price}
              </p>
              <p
                className={cn(
                  "text-sm mb-6",
                  tier.featured ? "text-gray-600" : "text-gray-400"
                )}
              >
                {tier.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={cn(
                        "w-4 h-4 mt-0.5 flex-shrink-0",
                        tier.featured ? "text-black" : "text-emerald-400"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        tier.featured ? "text-gray-700" : "text-gray-300"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenContact}
                variant={tier.featured ? "secondary" : "outline"}
                className="w-full"
                size="sm"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </section>
  );
}
