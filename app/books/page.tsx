import BooksGrid from "@/components/BooksGrid";
import Form from "next/form";
import { getBooks } from "@/lib/utils";
export default function BooksPage() {
  const filteredBooks = getBooks(); 

  return (
    <>
      <Form action="/3d-models" className="w-full px-4 md:max-w-xl">
        <input
          type="search"
          name="q"
          placeholder="Search 3D models..."
          autoComplete="off"
          // defaultValue={q}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        ></input>
      </Form>
      <BooksGrid title="Books" books={filteredBooks} />
    </>
  );
}
