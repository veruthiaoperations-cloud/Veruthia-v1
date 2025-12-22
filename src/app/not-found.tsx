import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-4 text-white/10">
          404
        </h1>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
          Asset Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The digital asset you&apos;re looking for doesn&apos;t exist or has been relocated.
        </p>
        <Link href="/">
          <Button size="lg">Return to Portfolio</Button>
        </Link>
      </div>
    </div>
  );
}
