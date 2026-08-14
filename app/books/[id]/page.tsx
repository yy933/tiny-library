import type { Metadata } from "next";

// rendering as:：Book Details | Tiny Library
// export const metadata: Metadata = {
//   title: "Book Details",
// };

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  return <h1>This is book {id} detail page</h1>;
}
