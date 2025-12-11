import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const BlogsList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/blogs/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div key={post.id} onClick={() => handleCardClick(post.id)} className="border rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition-shadow bg-white">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600">Post ID: {post.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsList;
