"use client";

import { useRouter } from "next/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";
import Pricing from "@/components/sections/pricing";

export default function Home() {
  const router = useRouter();

  const handleOpenTally = () => {
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.openPopup('3xjo7o', {
        layout: 'modal',
        width: 600,
        hideTitle: true,
        onSubmit: () => {
          setTimeout(() => {
            router.push('/success');
          }, 2000);
        },
      });
    }
  };

  return (
    <>
      <Hero onOpenContact={handleOpenTally} />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Pricing onOpenContact={handleOpenTally} />
    </>
  );
}
