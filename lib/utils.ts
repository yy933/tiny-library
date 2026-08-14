import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BooksData from "@/app/data/books.json";
import type { Book } from "@/app/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getBooks = ({ category }: { category?: string } = {}): Book[] => {
  if (!category) return BooksData;

  return BooksData.filter((book: Book) => book.category === category);
};

const getBookById = (id: string | number): Book => {
  const foundBook = BooksData.find(
    (book: Book) => book.id.toString() === id.toString(),
  );
  if (!foundBook) {
    throw new Error(`Book with id ${id} not found`);
  }
  return foundBook;
};

export { getBooks, getBookById };
