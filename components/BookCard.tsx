import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "./Pill";
import { BookCardProps } from "@/app/types";
import placeholderImg from "@/public/placeholder-img.jpg";

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/books/${book.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
      aria-labelledby={`book-${book.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <Image
            src={placeholderImg}
            alt={book.name}
            fill
            className="object-center object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2 min-h-[3.5rem]">
            <h2
              id={`book-${book.id}-title`}
              className="text-xl font-bold text-gray-800 line-clamp-2"
            >
              {book.name}
            </h2>
          </div>
          <span className="text-gray-800 text-lg font-semibold line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
            {book.author}
          </span>
          <div className="mt-2">
            <Pill>{book.category}</Pill>
          </div>
          <div
            className="flex items-center mt-2 text-gray-600"
            aria-label={`${book.likes} likes`}
          >
            <FaRegHeart
              className="w-5 h-5 mr-1 text-gray-400"
              aria-hidden="true"
            />
            <span>{book.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
