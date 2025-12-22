"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SPRING_PHYSICS } from "@/lib/utils";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_PHYSICS}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology for building tax-qualified digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.15 }}
              className="relative p-6 rounded-xl border border-white/10 bg-zinc-900/30"
            >
              <div className="absolute -top-4 left-6">
                <span className="bg-zinc-800 text-zinc-400 text-sm font-mono px-3 py-1 rounded-full border border-zinc-700">
                  0{step.step}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-playfair text-2xl font-bold mb-1">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
