import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LenisProvider from "@/components/providers/lenis-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Veruthia Consulting | Digital Asset Architecture",
  description:
    "High-end software architecture firm. We build systems, not websites. Section 179 eligible digital assets.",
  openGraph: {
    title: "Veruthia Consulting | Digital Asset Architecture",
    description: "High-end software architecture firm. We build systems, not websites.",
    type: "website",
    url: "https://veruthia.com",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Veruthia Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veruthia Consulting | Digital Asset Architecture",
    description: "High-end software architecture firm. We build systems, not websites.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="font-inter bg-[#050505] text-white antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
