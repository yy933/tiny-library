"use client";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import TinyLibraryLogo from "@/public/tinylibrary-logo.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Logo */}
            <img
              src={TinyLibraryLogo.src}
              alt="Tiny Library Logo"
              className="w-[40px] md:w-[150px]  h-auto block"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink
            className="text-sm uppercase cursor-pointer"
            href="/"
            isActive={pathname === "/"}
          >
            Home
          </NavLink>
          <NavLink
            className="text-sm uppercase cursor-pointer"
            href="/books"
            isActive={pathname === "/books"}
          >
            Books
          </NavLink>

          <NavLink
            className="text-sm uppercase cursor-pointer"
            href="/about"
            isActive={pathname === "/about"}
          >
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
