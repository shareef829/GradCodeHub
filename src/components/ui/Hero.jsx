export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Master Coding Skills for Your Research & Career
          </h1>
          <p className="text-xl mb-8">
            The perfect platform for graduate students to learn DSA, 
            Web Development, and Git through structured courses and real projects.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-800 transition">
              View Courses
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-indigo-700 rounded-xl p-8 h-64 flex items-center justify-center">
            <span className="text-2xl">Interactive Code Editor Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}