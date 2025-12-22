"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { SPRING_PHYSICS, cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_PHYSICS}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The Portfolio Array
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Software products built for real businesses. Each one a
            tax-qualified digital asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative overflow-hidden rounded-xl p-8 min-h-[320px] flex flex-col justify-end w-full max-w-full",
                item.gradient
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs uppercase tracking-wide text-gray-300 mb-3">
                  {item.tag}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{item.stats.metric}</p>
                  <p className="text-sm text-gray-400">{item.stats.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
