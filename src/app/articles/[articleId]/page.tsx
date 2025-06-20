import Link from "next/link";

export default function ArticlePage({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "fr" | "hn" };
}) {
  const { articleId } = params;
  const { lang = "en" } = searchParams;
  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Article in Language {lang}</p>
      <Link href={`/articles/${articleId}?lang=en`}>Switch to English</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>Switch to French</Link>
      <Link href={`/articles/${articleId}?lang=hn`}>Switch to Hindi</Link>
    </div>
  );
}
