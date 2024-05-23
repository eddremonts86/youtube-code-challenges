import useFetchPost from "./hooks/useFetchPost";
export default function Post() {
  const { posts, handleClick } = useFetchPost();

  return (
    <>
      <div>
        <button
          className="border-1 bg-red-800 px-10 py-4 rounded-xl"
          onClick={handleClick}
        >
          Fetch Post
        </button>
      </div>
      {!posts || !posts.length ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
          <div
            className="p-3 rounded-md bg-blue-3"
            key={Post.id}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  );
}
