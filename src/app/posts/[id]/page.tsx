'use client';

import { useEffect, useState } from 'react';
import Comments from '@/app/components/Comments';

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
};

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<Post | null>(null);
  const [postId, setPostId] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function unwrapParams() {
      try {
        const resolvedParams = await params;
        setPostId(resolvedParams.id);
      } catch {
        setError(true);
      }
    }
    unwrapParams();
  }, [params]);

  // Fetch the specific post by ID
  useEffect(() => {
    async function fetchPost() {
      if (!postId) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/posts`);
        const posts: Post[] = await res.json();
        const foundPost = posts.find((p) => p.id === postId);

        if (foundPost) {
          setPost(foundPost);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="text-center text-gray-600 font-medium mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 font-bold mt-10">Post not found</div>;
  }

  if (!post) {
    return null; // Avoid rendering if the post doesn't exist
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg mt-10">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-t-lg mb-6"
      />

      <h1 className="text-3xl font-bold text-teal-700 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
      <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
      <Comments />
    </div>
  );
}
