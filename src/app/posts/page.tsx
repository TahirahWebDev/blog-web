'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <main className="container mx-auto my-10 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">Blogs</h1>
        <p className="text-gray-600 mb-4">Explore our latest articles and share your thoughts!</p>
        <Link
          href="/create-post"
          className="inline-block bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-600 font-semibold transition-all"
        >
          Create Post
        </Link>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white rounded shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">By {post.author}</p>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <a
              href={`/posts/${post.id}`}
              className="text-teal-700 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
