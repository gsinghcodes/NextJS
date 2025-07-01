type Post = {
  id: string;
  title: string;
  body: string;
};

type Albums = {
  id: string;
  title: string;
  body: string;
};

async function fetchPosts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return await response.json();
}

async function fetchAlbums(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  return await response.json();
}

export default async function AlbumsPosts({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const posts = fetchPosts(id);
  const albums = fetchAlbums(id);
  const [postdata, albumdata] = await Promise.all([posts, albums]);
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div>
        {postdata.map((post: Post) => (
          <div style={{ marginBottom: "2px" }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        {albumdata.map((album: Albums) => (
          <div style={{ marginBottom: "2px" }}>
            <h1>{album.title}</h1>
            <p>{album.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
