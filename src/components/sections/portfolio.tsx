"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { SPRING_PHYSICS, cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-950">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative overflow-hidden rounded-xl p-8 min-h-[280px] flex flex-col justify-end",
                item.gradient
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-playfair text-3xl font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex gap-6">
                  {Object.entries(item.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
