import BookCard from "@/components/BookCard";
import {BooksGridProps, Book } from "@/app/types";

export default function BooksGrid({ title, books }: BooksGridProps) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
