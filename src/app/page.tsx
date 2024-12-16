import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto mt-12 sm:mt-20 p-6 sm:p-8 bg-black/60 rounded-lg shadow-xl text-center">
        {/* Welcome Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-5 uppercase tracking-wide text-yellow-300 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-white">
          Hello, I’m Zahid Ali. I’m a developer with skills in HTML, CSS, TypeScript, and Next.js. Welcome to my personal portfolio website where you can learn more about my work, my skills, and contact me for exciting opportunities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10">
          <a
            href="/about"
            className="inline-block text-white font-bold px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-300 rounded-full transition-all duration-300 transform hover:bg-yellow-300 hover:text-black hover:scale-110"
          >
            About Me
          </a>
          <a
            href="/contact"
            className="inline-block text-white font-bold px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-300 rounded-full transition-all duration-300 transform hover:bg-yellow-300 hover:text-black hover:scale-110"
          >
            Contact Me
          </a>
        </div>

        {/* Intro Text */}
        <div className="mt-12 text-white font-semibold text-lg sm:text-xl">
          <p>Feel free to explore my projects and learn more about my journey as a developer.</p>
        </div>

        {/* Services Button */}
        <div className="mt-8 flex justify-center gap-6 sm:gap-8">
          <a
            href="/services"
            className="inline-block text-white font-bold px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-300 rounded-full transition-all duration-300 transform hover:bg-yellow-300 hover:text-black hover:scale-110"
          >
            My Services
          </a>
        </div>
      </div>
    </div>
  );
}
