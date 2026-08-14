"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
interface SearchBarProps {
  action?: string;
  defaultValue?: string;
  category?: string;
}

export default function SearchBar({
  action = "/books",
  category=""
}: SearchBarProps) {
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";
  return (
    <Form action={action} className="w-full px-4 md:max-w-xl">
      {category && <input type="hidden" name="category" value={category} />}
      <input
        type="search"
        name="q"
        placeholder="Search books..."
        autoComplete="off"
        defaultValue={q}
        className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
      ></input>
    </Form>
  );
}
