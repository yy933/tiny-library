import type { Metadata } from "next";

// rendering as:：Book Details | Tiny Library
// export const metadata: Metadata = {
//   title: "Book Details",
// };
import Image from "next/image";
import placeholderImg from "@/public/placeholder-img.jpg";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "@/components/Pill";
import { getBookById } from "@/lib/utils";
export default async function BookDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const book = getBookById(id);
  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <Image
            src={placeholderImg}
            alt={`3D book of ${book.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            placeholder="blur"
            className="object-cover"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <FaRegHeart className="w-5 h-5 mr-2" aria-hidden="true" />
            <span className="font-light" aria-label={`${book.likes} likes`}>
              {book.likes}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{book.name}</h1>

          <Pill className="mb-6 w-fit">{book.category}</Pill>

          <div className="mb-6 prose prose-lg max-w-none">
            <span className="text-gray-800 text-lg font-semibold line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
              {book.author}
            </span>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={book.dateAdded}>
              Added on {new Date(book.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  );
}
