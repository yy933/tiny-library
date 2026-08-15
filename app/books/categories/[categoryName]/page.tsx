import { Suspense } from "react";
import BooksGrid from "@/components/BooksGrid";
import SearchBar from "@/components/SearchBar";
import { getCategoryBySlug, getBooks } from "@/lib/utils";
import type { CategoryPageProps } from "@/app/types";
export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryName } = await params;
  const { q } = (await searchParams) ?? {};
  const filteredCategory = getCategoryBySlug(categoryName);
  const filteredBooks = getBooks({ category: filteredCategory.slug, q });
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full h-12 max-w-xl mx-auto bg-muted rounded-full animate-pulse" />
        }
      >
        <SearchBar action="/books" />
      </Suspense>
      {filteredBooks.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No books found for "{q}".</p>
        </div>
      ) : (
        <BooksGrid title={filteredCategory.label} books={filteredBooks} />
      )}
    </>
  );
}
