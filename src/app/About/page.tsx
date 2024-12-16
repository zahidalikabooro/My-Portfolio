import React from 'react';
import Header from '@/components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-black/60 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-5 uppercase tracking-wide text-yellow-300 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-5 text-white">
        I graduated with a degree in Muslim History, and I’ve always been passionate about technology. I have developed skills in web development, including HTML, CSS, TypeScript, and Next.js. My goal is to create impactful and user-friendly websites.
        </p>
        <a
          href="/"
          className="inline-block text-yellow-300 font-bold mx-5 px-5 py-3 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
        >
          Back to Home
        </a>
        <a
          href="/contact"
          className="inline-block text-yellow-300 font-bold mx-5 px-5 py-3 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
        >
          Go to Contact
        </a>
      </div>
    </div>
  );
}
