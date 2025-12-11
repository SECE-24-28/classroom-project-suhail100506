import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })

    }, [id]);

    if (loading) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    if (!post) {
        return <div className="container mx-auto p-4">Post not found</div>;
    }
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="mb-4 text-gray-600">
                    <p>Post ID: {post.id}</p>
                    <p>User ID: {post.userId}</p>
                </div>
                <div className="text-lg leading-relaxed">
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}
export default BlogDetails;