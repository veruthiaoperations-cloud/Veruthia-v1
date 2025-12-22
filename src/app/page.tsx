"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";
import Pricing from "@/components/sections/pricing";

export default function Home() {
  const router = useRouter();
  const [tallyReady, setTallyReady] = useState(false);

  useEffect(() => {
    const checkTally = () => {
      if (typeof window !== 'undefined' && window.Tally) {
        setTallyReady(true);
        return true;
      }
      return false;
    };

    if (checkTally()) return;

    const interval = setInterval(() => {
      if (checkTally()) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleOpenTally = useCallback(() => {
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
    } else {
      const checkAndOpen = setInterval(() => {
        if (typeof window !== 'undefined' && window.Tally) {
          clearInterval(checkAndOpen);
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
      }, 100);

      setTimeout(() => clearInterval(checkAndOpen), 5000);
    }
  }, [router]);

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
