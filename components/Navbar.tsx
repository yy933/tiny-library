"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import TinyLibraryLogo from "@/public/tinylibrary-logo.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/about/contact";
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/">
          {/* Logo */}
          <Image
            src={TinyLibraryLogo}
            alt="Tiny Library Logo"
            className="w-[clamp(40px,12vw,150px)]  h-auto"
            priority
          />
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/" isActive={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/books" isActive={pathname === "/books"}>
            Books
          </NavLink>

          {isContactPage ? (
            <NavLink href="/about/contact" isActive={true}>
              About: Contact
            </NavLink>
          ) : (
            <NavLink href="/about" isActive={pathname === "/about"}>
              About
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}
