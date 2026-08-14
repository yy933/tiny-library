import Form from "next/form";
interface SearchBarProps {
  action?: string;
  defaultValue?: string;
}

export default async function SearchBar({
  action = "/books",
  defaultValue = "",
}: SearchBarProps) {
  return (
    <Form action={action} className="w-full px-4 md:max-w-xl">
      <input
        type="search"
        name="q"
        placeholder="Search books..."
        autoComplete="off"
        defaultValue={defaultValue}
        className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
      ></input>
    </Form>
  );
}
