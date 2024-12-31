import About from './about/page';
import { FaArrowRight } from 'react-icons/fa';
import Contact from './contact/page';
import Posts from './posts/page';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <header className="relative w-full h-[92vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/carousel.webp')" }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-gray-100 px-4 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Welcome to BlogHub
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Explore posts, create content, and connect with others!
            </p>
              <Link href={'/posts'} className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-6 rounded-full inline-flex items-center text-lg font-medium">
              Explore Blogs <FaArrowRight className="ml-2" />
              </Link>
          </div>
        </div>
      </header>

      <About />
      <Posts />
      <Contact />
    </div>
  );
}
