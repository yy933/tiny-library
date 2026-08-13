import Image from "next/image";
import HeroImageSquare from "@/public/hero-image-square.webp";
import Button from "@/components/Button";
import TinyLibraryLogo from "@/public/tinylibrary-logo.webp";
import { Layers, Globe, Bookmark } from "lucide-react";
export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="px-6 py-8 md:py-16 mx-auto max-w-7xl">
        {/* top(desktop): Hro image and description */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="relative w-full md:w-1/2 aspect-square max-w-[480px]">
            <Image
              src={HeroImageSquare}
              alt="Tiny Library - Small shelf, big impact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center rounded-sm"
              priority
            />
          </div>

          <div className="flex-1 space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              ABOUT TINY LIBRARY
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground">
              Small shelf, big impact
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tiny Library started as a simple idea: make it easier for curious
              readers to actually find books they'll love, not just scroll
              endless lists. Every title here is chosen with care, not
              algorithms.
            </p>
          </div>
        </div>

        {/* bottom(desktop): contact button */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <Button
            className="inline-block px-7 py-3 text-sm font-medium tracking-widest uppercase transition-colors duration-200"
            href="/contact"
          >
            CONTACT US
          </Button>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section
        className="py-10 md:py-16 px-6 max-w-7xl mx-auto"
        aria-labelledby="key-features"
      >
        <div className="px-6 mx-auto max-w-7xl">
          <h2 id="key-features" className="sr-only">
            Key Features
          </h2>
          <div className="grid grid-cols-1 py-6 gap-8 md:gap-0 md:grid-cols-3">
            {/* Feature 1 */}
            <article className="flex flex-col gap-3 md:px-8 md:first:pl-0 md:border-r border-border">
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Curated, not crowded
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tiny Library keeps the catalogue intentionally small so every
                book feels like a recommendation.
              </p>
            </article>
            {/* Feature 2 */}
            <article className="flex flex-col gap-3 md:px-8 md:border-r border-border">
              <div className="flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Easy to browse
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clear categories and simple descriptions make it quick to choose
                what you actually want to read next.
              </p>
            </article>

            {/* Feature 3 */}
            <article className="flex flex-col gap-3 md:px-8 md:last:pr-0">
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Readers first
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every part of Tiny Library is designed to help you spend less
                time searching and more time reading.
              </p>
            </article>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="px-6 py-12 md:py-20 max-w-3xl mx-auto text-left space-y-8">
        <div className="prose max-w-none">
          <h2 className="text-2xl mb-4 md:text-3xl font-semibold font-heading text-foreground">
            Our Ethos
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {" "}
            <p className="mb-4 text-gray-700">
              At Tiny Library, we believe a good book shouldn't be hard to find.
              Our ethos is to create a small, carefully curated space where
              every title earns its place on the shelf and readers can trust
              that anything they pick up is worth their time.
            </p>
            <hr className="border-border w-1/3 my-8" />
            <p className="text-gray-700">
              Instead of overwhelming you with thousands of options, Tiny
              Library focuses on a modest collection that feels personal and
              approachable. We want readers to feel like they've stepped into a
              cosy, well-loved library where someone has already done the hard
              work of sorting through the noise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
