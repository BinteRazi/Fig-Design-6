"use client";
import Link from "next/link";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    
  };

  return (
    <div className="bg-white  p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Left Section (Text) */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-left">Subscribe to our newsletter</h2>
          <p className="text-sm text-gray-500 mt-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

       {/* Right Section (Form) */}
<form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4 w-full md:w-auto"
>
  {/* Email Input and Button */}
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1 px-2 py-2 border border-gray-800 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-800"
      required
    />
    <button
      type="submit"
      className="px-6 py-2 bg-white text-black border border-black rounded-md hover:bg-blue-600 transition"
    >
      Subscribe
    </button>
  </div>

  {/* Text Below */}
  <p className="text-xs text-gray-800  text-left">
    By subscribing, you agree to our{" "}
    <Link href="#" className="text-black underline">
      Privacy Policy
    </Link>
    .
  </p>
</form>

      </div>
    </div>
  );
};

export default NewsletterForm;
