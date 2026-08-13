import type { Metadata } from "next";
import type { RootLayoutProps } from "@/app/types";
import { Raleway, Nunito } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tiny Library",
    template: "%s | Tiny Library",
  },

  description:
    "Tiny Library is a web application that allows users to browse books and book details.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Tiny Library",
    description: "Browse books and book details easily.",
    url: "https://your-domain.com",
    siteName: "Tiny Library",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
