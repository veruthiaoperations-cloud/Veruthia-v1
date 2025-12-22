"use client";

import Link from "next/link";
import { DISCLAIMER_TEXT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel text-2xl font-bold mb-4 tracking-wider">VERUTHIA</h3>
            <p className="text-gray-400 text-sm">
              High-end software architecture for businesses that demand
              excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="#services"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="#pricing"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/legal/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-zinc-500 text-center mb-4">
            {DISCLAIMER_TEXT}
          </p>
        </div>

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Veruthia Consulting, LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
