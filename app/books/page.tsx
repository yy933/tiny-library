import BooksGrid from "@/components/BooksGrid";
import SearchBar from "@/components/SearchBar";
import { getBooks } from "@/lib/utils";
import type { BookPageProps } from "@/app/types";
export default async function BooksPage({ searchParams }: BookPageProps) {
  const { q } = (await searchParams) ?? {};
  const books = getBooks({ q });

  return (
    <>
      <SearchBar action="/books" defaultValue={q} />
      {books.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No books found for "{q}".</p>
        </div>
      ) : (
        <BooksGrid title="Books" books={books} />
      )}
    </>
  );
}
