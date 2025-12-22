"use client";

import { motion } from "framer-motion";
import { Layout, Zap, MessageSquare } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SPRING_PHYSICS } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  MessageSquare: <MessageSquare className="w-8 h-8" />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING_PHYSICS}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            What We Build
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Digital infrastructure designed for scale, performance, and
            long-term value creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_PHYSICS, delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
