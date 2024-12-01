import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-12 bg-white">
        {/* Left Side - Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Learn new skills online with ease
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center md:justify-start">
            <Link href="/learn">
              <button className="bg-black text-white px-6 py-2 rounded shadow-md hover:bg-gray-900 w-full sm:w-auto">
                Start learning now
              </button>
            </Link>
            <Link href="/courses">
              <button className="px-6 py-2 rounded border text-black hover:bg-gray-100 w-full sm:w-auto">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 mt-8 md:mt-0 text-center md:text-right">
          <img
            src="/images/Image.png"
            alt="Woman smiling"
            className="rounded-md max-h-full w-full max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center md:items-start px-6 md:px-12">
          {/* Text on the left */}
          <h3 className="text-gray-600 font-bold mb-4 md:mb-0 md:mr-12 text-center md:text-left text-sm sm:text-base lg:text-lg">
            Trusted by 2000+ companies worldwide.
          </h3>
          {/* Logos on the right */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full">
            {["Logo1", "Logo2", "Logo3", "Logo4", "Logo5", "Logo6"].map((logo, index) => (
              <img
                key={index}
                src={`/images/Airbnb ${logo}.png`}
                alt={`Logo ${index + 1}`}
                className="w-16 sm:w-20 h-auto"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
