import React from "react";
import Link from "next/link";

const courses = [
  {
    label: 'Design',
    title: 'UI/UX Design 201',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 1.jpg', 
  },
  {
    label: 'Programming',
    title: 'Introduction to Python',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 2.jpg',
  },
  {
    label: 'Business',
    title: 'Data Analytics for Beginners',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 3.jpg',
  },
  {
    label: 'Art',
    title: 'Art Exploration',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 4.jpg',
  },
  {
    label: 'Law',
    title: 'Rule of Law',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 5.jpg',
  },
  {
    label: 'Tech',
    title: 'Introduction to Webflow',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    price: '$400',
    image: '/images/Image 6.jpg',
  },
];

const Courses: React.FC = () => {
  return (
    <div className="py-12 bg-white"> 
      {/* Courses Section */}
      <div className="text-center mb-12 bg-white"> 
        <h2 className="text-2xl font-bold">Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your ultimate guide to learning.
        </p>
      
        <nav className="flex justify-center items-center space-x-6 py-2 mt-4">
          <Link href="#" className="text-gray-700 hover:text-blue-500 transition-colors underline underline-offset-8">
            Popular
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Recommended
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500 transition-colors">
            Best Prices
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-100 border border-gray-200 rounded-lg shadow-sm overflow-hidden"> 
            <div className="p-4">
              <span className="text-gray-800 text-lg flex justify-between w-full">
                {course.label}
                <span className="flex items-center ml-2">
                  <span className="mr-1 text-gray-300">★</span>
                  <span className="text-gray-800">5.0</span>
                </span>
              </span>

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover mt-2"
              />
              <h3 className="font-semibold text-lg mt-4">{course.title}</h3>
              <p className="text-gray-800 text-sm">{course.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-transparent border border-black text-gray-800 py-1 px-3 text-sm rounded hover:bg-blue-600">
                  Enroll Now
                </button>
                <span className="text-black font-semibold">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-transparent border border-black text-gray-800 py-2 px-6 rounded hover:bg-blue-600">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
