import React from "react";
import Image from "next/image";
import TinyLibraryLogo from "@/public/tinylibrary-logo.webp";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <main className="flex-1 flex flex-col min-h-full justify-between">
     
      <div className="flex-1 flex flex-col">{children}</div>
    
      <div className="py-8 flex justify-center mt-auto">
        <Image
          src={TinyLibraryLogo}
          alt="Tiny Library Logo"
          className="w-[120px] md:w-[150px] h-auto opacity-80"
        />
      </div>
    </main>
  );
}
