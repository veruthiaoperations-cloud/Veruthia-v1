"use client";

import { motion } from "framer-motion";
import { Layout, Zap, MessageSquare } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  MessageSquare: <MessageSquare className="w-8 h-8" />,
};

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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            {...headerAnimation}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
          >
            What We Build
          </motion.h2>
          <motion.p
            {...bodyAnimation}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Digital infrastructure designed for scale, performance, and
            long-term value creation.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-zinc-900/50 border border-white/10 rounded-lg"
            >
              <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-white">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
