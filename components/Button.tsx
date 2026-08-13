import React from "react";
import Link from "next/link";
export default function Button({
  children,
  className = "",
  href
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <div className={`pt-2 ${className}`}>
      <Link
        href={href}
        className="inline-block px-7 py-3 text-sm font-medium tracking-widest text-black uppercase transition-colors duration-200 border border-black hover:bg-gray-700 hover:text-white"
      >
        {children}
      </Link>
    </div>
  );
}
