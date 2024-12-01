import React from 'react';

const achievements = [
  { value: '+200', label: 'Courses' },
  { value: '50K', label: 'Students' },
  { value: '370K', label: 'Reviews' },
  { value: '100+', label: 'Instructors' },
];

const Achievements: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Achievements</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Learn from a global network of expert instructors. Explore a variety of high-quality courses tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold">{achievement.value}</p>
            <p className="text-gray-600">{achievement.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




export default Achievements;
