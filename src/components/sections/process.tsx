"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const headerAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
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

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...headerAnimation}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology for building capital digital assets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
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
                <p className="text-zinc-500 text-sm uppercase tracking-wide mb-3 font-cinzel">
                  {step.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
