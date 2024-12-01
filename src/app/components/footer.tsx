import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./newsletter";

export default function Footer() {
  return (
    <footer className="bg-white p-6">
      {/* Newsletter Section */}
      <NewsletterForm />

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {/* Logo */}
        <div>
          <div className="mb-4">
            <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
          </div>
        </div>

        {/* Courses Links */}
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Courses</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link href="#" className="hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Technology
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link href="#" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h4 className="font-bold text-gray-700 mb-4">About Us</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-black mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-black gap-4">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">&copy; 2023 Ddsgnr. All rights reserved.</p>

        {/* Quick Links */}
        <div className="flex space-x-4 text-center">
          <Link href="#" className="hover:underline text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline text-sm">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline text-sm">
            Cookie Settings
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <Link href="#" className="hover:opacity-80 transition" aria-label="Facebook">
            <Image src="/icons/Facebook.png" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="#" className="hover:opacity-80 transition" aria-label="Instagram">
            <Image src="/icons/Instagram.png" alt="Instagram" width={20} height={20} />
          </Link>
          <Link href="#" className="hover:opacity-80 transition" aria-label="Twitter">
            <Image src="/icons/Twitter.png" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
            <Image src="/icons/LinkedIn.png" alt="LinkedIn" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
