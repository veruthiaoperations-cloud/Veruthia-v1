"use client";

import { DISCLAIMER_TEXT } from "@/lib/constants";

export default function DisclaimerBanner() {
  return (
    <div className="border-t border-white/10 bg-[#050505]/50 py-4 px-6">
      <p className="text-xs text-zinc-500 text-center max-w-4xl mx-auto leading-relaxed">
        {DISCLAIMER_TEXT}
      </p>
    </div>
  );
}
