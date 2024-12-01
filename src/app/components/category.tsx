import React from "react";

const categories = [
  { title: "Design & Development", info: "50+ Courses Available", icon: "/icons/icon_frame 1.png" },
  { title: "Marketing", info: "50+ Courses Available", icon: "/icons/icon_frame 2.png" },
  { title: "Development", info: "50+ Courses Available", icon: "/icons/icon_frame 3.png" },
  { title: "Communication", info: "50+ Courses Available", icon: "/icons/icon_frame 4.png" },
  { title: "Digital Marketing", info: "50+ Courses Available", icon: "/icons/icon_frame 5.png" },
  { title: "Self Development", info: "50+ Courses Available", icon: "/icons/icon_frame 6.png" },
  { title: "Business", info: "50+ Courses Available", icon: "/icons/icon_frame 7.png" },
  { title: "Finance", info: "50+ Courses Available", icon: "/icons/icon_frame 8.png" },
  { title: "Consulting", info: "50+ Courses Available", icon: "/icons/icon_frame 9.png" },
];

const CategorySection: React.FC = () => {
  return (
    <div className="bg-white py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore Courses By Category</h2>
        <p className="text-gray-600 mt-2">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 border border-gray-300 rounded-md shadow-md px-4 py-6 gap-4"
          >
            {/* Icon */}
            <img
              src={category.icon}
              alt={category.title}
              className="w-16 h-16 object-cover"
            />
            {/* Text Content */}
            <div>
              <h3 className="text-xl font-medium">{category.title}</h3>
              <p className="text-gray-500 text-sm">{category.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="text-center mt-12">
        <button className="bg-white border border-black text-black py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
