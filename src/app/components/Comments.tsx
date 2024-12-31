'use client';

import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-teal-700 mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-teal-50 text-teal-800 p-4 rounded-lg shadow"
          >
            {comment}
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 flex-grow shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          onClick={addComment}
          className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition shadow"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
