"use client";

import { useState } from "react";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Pricing from "@/components/sections/pricing";
import ContactModal from "@/components/sections/contact-modal";
import Toast from "@/components/ui/toast";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => setToast((prev) => ({ ...prev, isVisible: false })), 5000);
  };

  return (
    <>
      <Hero onOpenContact={() => setIsContactOpen(true)} />
      <Services />
      <Portfolio />
      <Pricing onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSuccess={() => showToast("Audit request submitted successfully!", "success")}
        onError={() => showToast("Something went wrong. Please try again.", "error")}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </>
  );
}
