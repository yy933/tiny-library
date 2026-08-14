import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BooksData from "@/app/data/books.json";
import type { Book } from "@/app/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBooks({
  category,
}: { category?: string } = {}): Book[] {
  if (!category) return BooksData;

  return BooksData.filter((book: Book) => book.category === category);
}
