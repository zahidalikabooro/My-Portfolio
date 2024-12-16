import React from 'react';
import Header from '@/components/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto mt-12 sm:mt-20 p-6 sm:p-8 bg-black/60 rounded-lg shadow-lg">
        {/* Contact Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-5 uppercase tracking-wide text-yellow-300 drop-shadow-lg">
          Contact Us
        </h1>

        {/* Email Contact */}
        <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
          You can reach me via email at:{' '}
          <a href="mailto:kaboorozahidali3@gmail.com" className="text-yellow-300 hover:text-pink-600">
            kaboorozahidali3@gmail.com
          </a>
        </p>

        {/* Phone Contact */}
        <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
          Or, feel free to call me at:{' '}
          <a href="tel:+923110898690" className="text-yellow-300 hover:text-pink-600">
            0311-0898690
          </a>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mt-6">
          <a
            href="/about"
            className="inline-block text-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
          >
            Go to About
          </a>
          <a
            href="/"
            className="inline-block text-yellow-300 font-bold px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:text-pink-600 transform hover:scale-110"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
