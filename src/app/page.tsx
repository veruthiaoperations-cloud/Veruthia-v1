"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Process from "@/components/sections/process";
import About from "@/components/sections/about";
import Pricing from "@/components/sections/pricing";
import { TALLY_FORM_ID } from "@/lib/tally";

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
      window.Tally.openPopup(TALLY_FORM_ID, {
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
          window.Tally.openPopup(TALLY_FORM_ID, {
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
      <Portfolio />
      <Services />
      <Process />
      <About />
      <Pricing onOpenContact={handleOpenTally} />
    </>
  );
}
