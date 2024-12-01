import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Testimonials Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
          {[
            {
              name: "John Doe",
              role: "Developer",
              img: "/images/team_Image 3.png",
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            },
            {
              name: "Jane Smith",
              role: "Designer",
              img: "/images/team_Image 1.png",
              testimonial:
                "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa.",
            },
            {
              name: "Alice Johnson",
              role: "Manager",
              img: "/images/team_Image 6.png",
              testimonial:
                "Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-black rounded-lg text-left"
              style={{
                width: "362.67px", 
                height: "321.89px", 
                padding: "32px", 
              }}
            >
              {/* Stars */}
              <div className="text-black text-lg mb-2">{'★'.repeat(5)}</div>

              {/* Testimonial */}
              <p className="text-gray-600 italic">{item.testimonial}</p>

              {/* User Details */}
              <div className="flex items-center mt-4 gap-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
