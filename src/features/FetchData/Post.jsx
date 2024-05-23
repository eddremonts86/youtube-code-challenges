import { useEffect, useRef, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState(1);
  const [postId, setPostId] = useState(null);
  const abortController = useRef(null);
  useEffect(() => {
    const url = postId
      ? `https://jsonplaceholder.typicode.com/posts/${postId}`
      : "https://jsonplaceholder.typicode.com/posts";

    const fetchPost = async () => {
      abortController.current?.abort();
      abortController.current = new AbortController();

      try {
        const response = await fetch(url, {
          signal: abortController.current.signal,
        });
        const data = await response.json();
        setPosts(postId ? [data] : data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();

    return () => {
      setPosts(null);
    };
  }, [postId]);

  const handleClick = () => {
    setPostId((prev) => prev + 1);
  };

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
