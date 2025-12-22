"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import { SPRING_PHYSICS } from "@/lib/utils";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={SPRING_PHYSICS}
          className="fixed bottom-8 left-1/2 z-50"
        >
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl ${
              type === "success"
                ? "bg-emerald-900 border border-emerald-700"
                : "bg-red-900 border border-red-700"
            }`}
          >
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span className="text-white">{message}</span>
            <button
              onClick={onClose}
              className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
