import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white text-black">
      {/* Main Header Section */}
      <div className="w-full border-b-2 border-black bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-6">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span>Phone: 956 742 455</span>
            <span className="md:border-l-2 md:pl-6 border-gray-400">
              Email: info@ddsgnr.com
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0 bg-white pl-96 p-1">
            <Link href="#" className="hover:opacity-80 transition" aria-label="Facebook">
              <Image src="/icons/Facebook.png" alt="Facebook Icon" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition" aria-label="Instagram">
              <Image src="/icons/Instagram.png" alt="Instagram Icon" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition" aria-label="Twitter">
              <Image src="/icons/Twitter.png" alt="Twitter Icon" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
              <Image src="/icons/LinkedIn.png" alt="LinkedIn Icon" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Header Section */}
      <div className="bg-gray-50 shadow-md border-b-2 border-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Ddsgnr Logo"
              width={120}
              height={60}
              className="mr-2"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 bg-white p-4 mr-4">
            <Link href="#" className="text-gray-700 hover:underline">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:underline">
              Courses
            </Link>
            <Link href="#" className="text-gray-700 hover:underline">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:underline">
              Achievement
            </Link>
            <Link href="#" className="text-gray-700 hover:underline">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:underline">
              Testimonials
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-col items-end space-y-2">
            <button className="text-gray-700 hover:underline">Menu</button>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 text-sm font-normal text-black bg-white rounded border border-black hover:bg-gray-200 transition"
              aria-label="Login Button"
            >
              Login
            </button>
            <button
              className="px-4 py-2 text-sm font-normal text-white bg-black rounded border border-black hover:bg-gray-800 transition"
              aria-label="Sign Up Button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
