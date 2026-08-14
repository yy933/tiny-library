import SearchBar from "@/components/SearchBar";
import { getBooks } from "@/lib/utils";
import type { CategoryLayoutProps } from "@/app/types";
export default async function CategoryLayout({
  children,
  params,
}: CategoryLayoutProps) {

  const { q } = await params;


  return (
    <>
      <SearchBar action="/books" defaultValue={q} />
      {children}
    </>
  );
}
