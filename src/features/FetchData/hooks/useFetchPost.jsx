import { useState, useRef, useEffect } from 'react';


export default function useFetchPost() {
    const [postId, setPostId] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortController = useRef(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const url = postId
                    ? `https://jsonplaceholder.typicode.com/posts/${postId}`
                    : "https://jsonplaceholder.typicode.com/posts";

                abortController.current?.abort();
                abortController.current = new AbortController();

                const response = await fetch(url,
                    { signal: abortController.current.signal }
                );
                const data = await response.json();
                postId ? setPosts([data]) : setPosts(data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
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

    return { postId, loading, error, posts, handleClick };
}