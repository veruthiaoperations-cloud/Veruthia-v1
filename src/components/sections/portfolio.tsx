"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
            className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="headline-gold-effect">The Portfolio Array</span>
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
          {PORTFOLIO_ITEMS.map((item) => {
            const isClickable = item.liveUrl && item.liveUrl !== '#';
            const cardContent = (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)" }}
                className={cn(
                  "relative overflow-hidden rounded-xl p-8 h-full min-h-[460px] flex flex-col justify-end border border-white/10 backdrop-blur-md",
                  gradientMap[item.name] || item.gradient,
                  isClickable && "cursor-pointer"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/60 to-transparent" />
                <div className="relative z-10 flex flex-col h-full">
                  {/* Tag Zone - Fixed height */}
                  <div className="h-8 mb-3 flex items-start">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs uppercase tracking-wide text-gray-300 font-display">
                      {item.tag}
                    </span>
                  </div>
                  {/* Title Zone - Fixed height for up to 2 lines */}
                  <div className="h-[100px] mb-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  {/* Description Zone - Fixed height for up to 5 lines */}
                  <div className="h-[110px] mb-4">
                    <p className="text-gray-300 text-sm font-sans leading-relaxed">{item.description}</p>
                  </div>
                  {/* Stats Zone - Fixed height */}
                  <div className="h-12 flex items-baseline gap-2">
                    <p className="text-3xl font-bold">{item.stats.metric}</p>
                    <p className="text-sm text-gray-400 font-sans">{item.stats.label}</p>
                  </div>
                  {/* CTA Zone - Fixed height */}
                  <div className="h-10 mt-4 flex items-center">
                    {isClickable && (
                      <div className="flex items-center font-display text-sm font-bold text-[#d4af37]">
                        <span>View Live Site</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );

            return isClickable ? (
              <a
                key={item.id}
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
