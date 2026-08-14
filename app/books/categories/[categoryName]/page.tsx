import BooksGrid from "@/components/BooksGrid";
import { getCategoryBySlug, getBooks } from "@/lib/utils";
import type { CategoryPageProps } from "@/app/types";
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const filteredCategory = getCategoryBySlug(categoryName);
  const filteredBooks = getBooks({ category: filteredCategory.slug });
  return <BooksGrid title={filteredCategory.label} books={filteredBooks} />;
}
