'use client';

import { useState } from 'react';

// Define a Post type
type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
};

export default function CreatePostForm({
  onPostCreated,
}: {
  onPostCreated: (post: Post) => void; // Use the Post type here
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !imageUrl || !author) return;

    setLoading(true);
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, imageUrl, author }),
      });
      const newPost: Post = await response.json(); // Type the newPost response
      onPostCreated(newPost);
      setTitle('');
      setContent('');
      setImageUrl('');
      setAuthor('');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-teal-50'>
      <h2 className="text-3xl text-center font-bold mb-8 mt-9 text-teal-700">Create a New Post</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg max-w-lg mb-5 mx-auto"
      >
        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Post Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Post Content"
          />
        </div>
        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-2">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Image URL"
          />
          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-40 object-cover rounded border border-teal-200"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Author Name"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded text-white font-semibold ${
            loading
              ? 'bg-teal-400 cursor-not-allowed'
              : 'bg-teal-700 hover:bg-teal-600'
          }`}
        >
          {loading ? <span>Loading...</span> : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
