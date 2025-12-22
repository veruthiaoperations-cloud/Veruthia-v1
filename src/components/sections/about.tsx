"use client";

import { motion } from "framer-motion";
import { COMMANDERS } from "@/lib/constants";

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

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...headerAnimation}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The Commanders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The architects behind every digital asset.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {COMMANDERS.map((commander) => (
            <motion.div
              key={commander.id}
              variants={itemVariants}
              className="p-8 rounded-xl border border-white/10 bg-zinc-900/30"
            >
              <div className="mb-6">
                <h3 className="font-playfair text-2xl font-bold mb-1">
                  {commander.name}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide font-cinzel">
                  {commander.title}
                </p>
              </div>
              <blockquote className="text-gray-300 leading-relaxed italic border-l-2 border-zinc-700 pl-4">
                &ldquo;{commander.bio}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
