import BooksGrid from "@/components/BooksGrid";
import SearchBar from "@/components/SearchBar";
import Form from "next/form";
import { getBooks } from "@/lib/utils";
export default function BooksPage() {
  const filteredBooks = getBooks(); 

  return (
    <>
     
      <BooksGrid title="Books" books={filteredBooks} />
    </>
  );
}
