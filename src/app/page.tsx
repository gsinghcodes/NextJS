import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex gap-3">
        <Link href={"/blog"}>Blogs</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/articles/breaking-news?lang=en"}>Read in English</Link>
        <Link href={"/articles/breaking-news?lang=fr"}>Read in French</Link>
        <Link href={"/order-product"}>Order Product</Link>
        <Link href={"/dashboard"}>Dashboard Page</Link>
      </div>
    </div>
  );
}
