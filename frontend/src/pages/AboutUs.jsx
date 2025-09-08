import React from 'react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/images/team1.jpg',
    bio: 'With over 20 years in the construction industry, Rajesh leads Unity Construction with a vision for quality, innovation, and client satisfaction.',
  },
  {
    name: 'Anita Sharma',
    role: 'Project Manager',
    image: '/images/team2.jpg',
    bio: 'Anita ensures every project is delivered on time and to the highest standards, coordinating teams and resources with expertise.',
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Architect',
    image: '/images/team3.jpg',
    bio: 'Vikram brings creativity and technical excellence to every design, focusing on sustainable and functional spaces.',
  },
];

const AboutUs = () => {
  return (
    <div className="px-4 md:px-12 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Unity Construction is dedicated to building more than just
          structures—we build trust, relationships, and a legacy of excellence.
          Since our founding, we have delivered a wide range of residential,
          commercial, and infrastructure projects across the region, always
          prioritizing quality, safety, and client satisfaction.
        </p>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-2">
            To deliver innovative, sustainable, and high-quality construction
            solutions that exceed our clients’ expectations and contribute
            positively to the communities we serve.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Integrity and transparency in every project</li>
            <li>Commitment to safety and sustainability</li>
            <li>Continuous innovation and improvement</li>
            <li>Client-focused approach</li>
            <li>Teamwork and respect</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                />
                <div className="text-lg font-semibold text-gray-800">
                  {member.name}
                </div>
                <div className="text-blue-700 text-sm mb-2">{member.role}</div>
                <p className="text-gray-600 text-center text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Unity Construction?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our experienced team, commitment to quality, and focus on client
            satisfaction set us apart in the construction industry. We use the
            latest technologies and sustainable practices to ensure every
            project is built to last. Partner with us to turn your vision into
            reality—on time, on budget, and beyond expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
