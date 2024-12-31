
export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <header className="text-teal-800 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg">
            We'd love to hear from you. Feel free to reach out!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-10 px-4">
        <section className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border border-teal-400 focus:ring-teal-500 focus:border-teal-500 p-2 w-full rounded"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border border-teal-400 focus:ring-teal-500 focus:border-teal-500 p-2 w-full rounded"
                placeholder="Your Email"
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="border border-teal-400 focus:ring-teal-500 focus:border-teal-500 p-2 w-full rounded"
                placeholder="Your Message"
                rows={5}
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded w-full shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
