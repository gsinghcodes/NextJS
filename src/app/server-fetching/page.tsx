import { Suspense } from "react";
import FetchUser from "./fetch-user";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function ServerFetching() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Posts[] = await response.json();
  const filteredPosts = data.filter((post) => post.id % 10 === 0);
  return (
    <div className="bg-black h-full">
      {filteredPosts.map((post) => (
        <div key={post.id} className="bg-black m-3">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Suspense fallback={<div>Loading Author Name</div>}>
            <FetchUser userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
