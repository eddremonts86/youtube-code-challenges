
import { useEffect, useState } from 'react';


export default function Post() {

    const [posts, setPosts] = useState(1);
    const [postId, setPostId] = useState(null);

    useEffect(() => {

        const url = postId
            ? `https://jsonplaceholder.typicode.com/posts/${postId}`
            : 'https://jsonplaceholder.typicode.com/posts';

        const fetchPost = async () => {
            try {
                const respone = await fetch(url)
                const data = await respone.json();
                setPosts(data);
                alert('Post fetched successfully');

            } catch (error) {
                alert('Failed to fetch post');

            }

        }
        fetchPost();

        return () => {
            setPosts(null);
        }

    }, [postId]);


    const handleClick = () => {
        setPostId(1);
    }


    if (!posts) return <div>Loading...</div>;

    return (
        <>
            <div>
                <button className="border-1 bg-red-800 px-10 py-4 rounded-xl" onClick={handleClick}>Fetch Post</button>
            </div>
            {posts.map((post) => (
                <div className='p-3 rounded-md bg-blue-3' key={Post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}