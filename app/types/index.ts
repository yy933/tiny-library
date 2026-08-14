import type { ReactNode } from "react";
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

// Data Types
export type Book = {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  id: number;
  slug: string;
  label: string;
};

// Components Types
export type BookCardProps = {
  book: Book;
};

export type BooksGridProps = {
  title: string;
  books: Book[];
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive: boolean;
  className?: string;
};

// Page Types
export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export interface BookPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export interface CategoryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ q?: string }>;
}
