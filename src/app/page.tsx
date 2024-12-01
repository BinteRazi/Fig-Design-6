import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import CategorySection from './components/category';
import Achievements from './components/achievement';
import Courses from './components/courses';
import Team from './components/team';
import Testimonials from './components/testimonial';
import Footer from './components/footer';

const Page = () => {
  return (
     <div className="min-h-screen bg-gray-100">
     
      <Header />
      <Hero/>
      <CategorySection />
      <Achievements />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />

      </div>
  );
};

export default Page;
