import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "./Pill";
import { BookCardProps } from "@/app/types";
import placeholderImg from "@/public/placeholder.jpg";

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/3d-models/${book.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
      aria-labelledby={`book-${book.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <img
            src={placeholderImg.src}
            alt={book.name}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2 min-h-[3.5rem]">
            <h2
              id={`book-${book.id}-title`}
              className="text-xl font-semibold text-gray-800 line-clamp-2"
            >
              {book.name}
            </h2>
          </div>
          <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
            {book.description}
          </p>
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
