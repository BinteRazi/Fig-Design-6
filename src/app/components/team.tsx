import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  const team = [
    {
      name: 'James Ndoku',
      role: 'Marketing Coordinator',
      img: '/images/team_Image 1.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
    {
      name: 'Joseph Ngumbau',
      role: 'Medical Assistant',
      img: '/images/team_Image 3.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
    {
      name: 'Joseph Munyambu',
      role: 'Nursing Assistant',
      img: '/images/team_Image 2.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
    {
      name: 'Erick Kipkemboi',
      role: 'Web Designer',
      img: '/images/team_Image 4.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
    {
      name: 'Stephen Kerubo',
      role: 'President of Sales',
      img: '/images/team_Image 5.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
    {
      name: 'John Leboo',
      role: 'Dog Trainer',
      img: '/images/team_Image 6.png',
      social: {
        linkedin: '/icons/Linkedin.png',
        twitter: '/icons/Twitter.png',
        website: '/icons/Web.png',
      },
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto text-center py-12">
    <h2 className="text-3xl font-bold mb-4">Our team</h2>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <div key={index} className="text-center p-6">
          <Image
            src={member.img}
            alt={member.name}
            width={100}
            height={100}
            className=" mx-auto mb-4"
          />
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-gray-500 mb-4">{member.role}</p>
          <div className="flex justify-center space-x-4">
           
            {/* LinkedIn */}
            {member.social.linkedin && (
              <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.social.linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </Link>
            )}
            {/* Twitter */}
            {member.social.twitter && (
              <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.social.twitter}
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </Link>
            )}
            {/* Website */}
            {member.social.website && (
              <Link href={member.social.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.social.website}
                  alt="Website"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
      </div>
  );
}
