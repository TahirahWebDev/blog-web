'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({
  id,
  title,
  description,
  imageUrl,
  author,
}: {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}) {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">By {author}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={`/posts/${id}`}
        className="text-blue-500 font-semibold hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}
