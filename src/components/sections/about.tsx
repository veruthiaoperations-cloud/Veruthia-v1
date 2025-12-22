"use client";

import { motion } from "framer-motion";
import { COMMANDERS } from "@/lib/constants";
import { SPRING_PHYSICS } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_PHYSICS}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            The Commanders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The architects behind every digital asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMANDERS.map((commander, index) => (
            <motion.div
              key={commander.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.15 }}
              className="p-8 rounded-xl border border-white/10 bg-zinc-900/30"
            >
              <div className="mb-6">
                <h3 className="font-playfair text-2xl font-bold mb-1">
                  {commander.name}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wide">
                  {commander.title}
                </p>
              </div>
              <blockquote className="text-gray-300 leading-relaxed italic border-l-2 border-zinc-700 pl-4">
                &ldquo;{commander.bio}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
