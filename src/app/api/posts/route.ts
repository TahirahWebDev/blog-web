import { NextResponse } from 'next/server';

let posts = [
  {
    id: '1',
    title: 'Exploring the World of AI',
    content: 'Artificial Intelligence is revolutionizing industries and reshaping the way we live and work.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    author: 'Sophia Williams',
  },
  {
    id: '2',
    title: 'The Art of Minimalism',
    content: 'Minimalism is more than an aesthetic; it’s a lifestyle that encourages intentional living.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    author: 'Liam Carter',
  },
  {
    id: '3',
    title: 'The Future of Renewable Energy',
    content: 'Renewable energy sources are paving the way for a sustainable future.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8URuGbG0IQrhNK7WHuOioGBLYCTRJQ-f5g&s',
    author: 'Emma Brown',
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newPost = { id: `${posts.length + 1}`, ...body };
  posts.push(newPost);
  return NextResponse.json(newPost);
}
