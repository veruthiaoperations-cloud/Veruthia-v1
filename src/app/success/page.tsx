"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";
import { SPRING_PHYSICS } from "@/lib/utils";

export default function SuccessPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ ...SPRING_PHYSICS, delay: 0.2 }}
            >
              <CheckCircle className="w-20 h-20 text-emerald-400" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.3 }}
          className="font-playfair text-4xl md:text-5xl font-bold mb-4"
        >
          Audit Request Received
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.4 }}
          className="text-gray-400 text-lg mb-8"
        >
          Thank you for your interest. Our team will review your submission and
          reach out within 24-48 business hours to schedule your Asset Audit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING_PHYSICS, delay: 0.5 }}
        >
          <Link href="/">
            <Button size="lg">Return Home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
