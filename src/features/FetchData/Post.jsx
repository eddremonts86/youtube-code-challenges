
import { useEffect, useState } from 'react';


export default function Post() {

    const [post, setPost] = useState(null);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        const url = postId 
                    ? `https://jsonplaceholder.typicode.com/posts/${postId}` 
                    : 'https://jsonplaceholder.typicode.com/posts';

        const fetchPost = async () => {
            const respone = await fetch(url)
            const data = await respone.json();
            setPost(data);
        }
        fetchPost();
    }, [postId]);




    return (
        <div>
            <button onClick={() => setPostId(prev => prev + 1)}>Fetch Post</button>
            (posts ? (
                posts.map((post) => {

                        <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                })
            ) : <p>Loading...</p>)
        </div>
    )
}