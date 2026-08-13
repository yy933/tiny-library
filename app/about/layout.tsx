import React from "react";
import Image from "next/image";
import TinyLibraryLogo from "@/public/tinylibrary-logo.webp";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      {/* Bottom Logo */}
      <div className="pt-8 flex justify-center">
        <Image
          src={TinyLibraryLogo}
          alt="Tiny Library Logo"
          className="w-[120px] md:w-[150px] h-auto opacity-80"
        />
      </div>
    </main>
  );
}
