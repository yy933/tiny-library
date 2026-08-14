import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import BooksData from "@/app/data/books.json";
import type { Book, Category } from "@/app/types";
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

// Format label：Convert "non-fiction" to "Non-Fiction" or "non fiction" to "Non Fiction"
function formatLabel(slug: string): string {
  return slug
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

const getCategories = (): Category[] => {
  // 1. get all unique categories by Set and Array.from
  const uniqueCategories = Array.from(
    new Set(BooksData.map((book) => book.category)),
  );

  // 2. convert unique categories to an array of objects
  return uniqueCategories.map((categorySlug, index) => ({
    id: index + 1,
    slug: categorySlug,
    label: formatLabel(categorySlug),
  }));
};

export { getBooks, getBookById, getCategories };
