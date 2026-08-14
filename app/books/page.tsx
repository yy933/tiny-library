import BooksGrid from "@/components/BooksGrid";
import SearchBar from "@/components/SearchBar";
import { getBooks } from "@/lib/utils";
import type { BookPageProps, Book } from "@/app/types";
export default async function BooksPage({ searchParams }: BookPageProps) {
  const books = getBooks();
  const { q } = (await searchParams) ?? {};
  let filteredBooks = books;

  if (q && q.trim() !== "") {
    const query = q.trim().toLowerCase();
    filteredBooks = filteredBooks.filter(
      (book: Book) =>
        book.name.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query),
    );
  }

  return (
    <>
      <SearchBar action="/books" defaultValue={q} />
      {filteredBooks.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No books found for "{q}".</p>
        </div>
      ) : (
        <BooksGrid title="Books" books={filteredBooks} />
      )}
    </>
  );
}
