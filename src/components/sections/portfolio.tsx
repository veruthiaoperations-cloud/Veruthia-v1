"use client";

import { motion } from "framer-motion";
import { Lock, Code, BarChart3, TrendingUp, Zap } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Lock: <Lock className="w-12 h-12" />,
  Code: <Code className="w-12 h-12" />,
  BarChart3: <BarChart3 className="w-12 h-12" />,
  TrendingUp: <TrendingUp className="w-12 h-12" />,
  Zap: <Zap className="w-12 h-12" />,
};

const gradientMap: Record<string, string> = {
  "SmartHVAC Analytics": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black",
  "Veruthia Systems": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-black to-black",
  "Hometown Rock and Landscape, LLC": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black",
  "All Care Drain and Leak Detection": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-black to-black",
  "Acts Heat and Air": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/40 via-black to-black",
  "Metro-Barber-OS": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/40 via-black to-black",
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            {...headerAnimation}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            The Portfolio Array
          </motion.h2>
          <motion.p
            {...bodyAnimation}
            className="text-gray-400 max-w-2xl mx-auto font-sans"
          >
            Software products built for real businesses. Each one a
            capital digital asset.*
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)" }}
              className={cn(
                "relative overflow-hidden rounded-xl p-8 min-h-[320px] flex flex-col justify-end border border-white/10 backdrop-blur-md",
                gradientMap[item.name] || item.gradient
              )}
            >
              <div className="absolute top-6 right-6 text-white/10">
                {iconMap[item.icon]}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/60 to-transparent" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs uppercase tracking-wide text-gray-300 mb-3 font-display">
                  {item.tag}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 font-sans">{item.description}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{item.stats.metric}</p>
                  <p className="text-sm text-gray-400 font-sans">{item.stats.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
