import Header from "./components/header";
import HeroSection from "./components/hero";
import Categories from "./components/category";
import Achievements from "./components/achievement";
import Courses from "./components/courses";
import Team from "./components/team";
import Testimonials from "./components/testimonial";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <HeroSection />
      <Categories />

      {/* First Achievements Section */}
      <Achievements />

      {/* Second Achievements Section */}
      <Achievements />

      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
