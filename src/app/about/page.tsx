import Image from 'next/image';
import { FaHandsHelping } from 'react-icons/fa';

export default function About() {
  return (
    <div className='bg-teal-50'>
      <header className="text-teal-800 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-teal-600">
            Learn more about our mission, vision, and the team behind this blog.
          </p>
        </div>
      </header>

      <main className="container mx-auto my-10 px-4">
        {/* Our Mission Section */}
        <section className="space-y-6 bg-teal-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-800">Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Using React Icon */}
            <div className="flex-shrink-0 w-32 h-32 rounded-full bg-teal-700 flex items-center justify-center text-white text-6xl">
              <FaHandsHelping />
            </div>
            <p className="text-gray-700 text-lg md:w-3/4">
              At our blog, we aim to provide a platform for individuals to share their thoughts,
              ideas, and knowledge. We believe in the power of words to connect, inspire, and educate.
              Through our platform, we want to create a vibrant community of like-minded individuals
              who can learn and grow together.
            </p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="space-y-6 mt-12">
          <h2 className="text-2xl font-bold text-teal-800">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="relative mb-4">
                <Image
                  src="/p5.webp"
                  alt="Team Member 1"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-700">John Doe</h3>
              <p className="text-teal-600 mb-2">Founder & CEO</p>
              <p className="text-gray-700">
                John is the visionary behind BlogHub, passionate about creating a space for
                writers and readers to connect and share ideas.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="relative mb-4">
                <Image
                  src="/p8.webp"
                  alt="Team Member 2"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-700">Jane Smith</h3>
              <p className="text-teal-600 mb-2">Lead Developer</p>
              <p className="text-gray-700">
                Jane is the technical brain of the project, ensuring our platform is user-friendly
                and efficient for both content creators and readers.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="relative mb-4">
                <Image
                  src="/p3.webp"
                  alt="Team Member 3"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-700">Jessica</h3>
              <p className="text-teal-600 mb-2">Content Manager</p>
              <p className="text-gray-700">
                Jessica oversees content creation, ensuring that all posts are engaging and educational
                for our growing audience.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
