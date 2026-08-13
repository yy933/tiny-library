import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/hero-image.webp";
import HeroImageSquare from "@/public/hero-image-square.webp";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col ">
      <section className="w-full flex flex-1 flex-col  justify-between items-center gap-8 pt-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 px-6 md:px-12 space-y-5 md:space-y-6 max-w-xl">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase">
            BROWSE BOOKS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight text-gray-900">
            Find your next favourite book
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Tiny Library is a cosy corner of the web where readers discover
            hand-picked titles across every genre, from timeless classics to
            hidden indie gems.
          </p>

          <div className="pt-2">
            <Link
              href="/books"
              className="inline-block px-7 py-3 text-sm font-medium tracking-widest text-black uppercase transition-colors duration-200 border border-black hover:bg-black hover:text-white"
            >
              BROWSE BOOKS
            </Link>
          </div>
        </div>
        {/* Mobile hero image */}
        <div className="relative w-full flex-1 min-h-[350px] md:hidden mt-4 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_45%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_45%)]">
          <Image
            src={HeroImageSquare}
            fill
            className="object-cover object-center"
            alt="Hero Image"
            priority
          />
        </div>

        {/* Desktop hero image */}
        <div className="hidden md:flex flex-1 justify-center items-center px-6">
          <Image
            src={HeroImage}
            className="w-[420px] h-auto object-contain"
            alt="Hero Image"
            priority
          />
        </div>
      </section>
    </main>
  );
}
