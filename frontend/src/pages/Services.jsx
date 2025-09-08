import React from 'react';
import Card from '../components/Card';

const services = [
  {
    title: 'Residential Construction',
    image: '/images/service1.jpg',
    description:
      'We build beautiful, durable homes tailored to your needs, using the latest techniques and materials.',
  },
  {
    title: 'Commercial Complexes',
    image: '/images/service2.jpg',
    description:
      'From offices to retail spaces, our commercial projects are designed for functionality and style.',
  },
  {
    title: 'Infrastructure Projects',
    image: '/images/service3.jpg',
    description:
      'Bridges, roads, and public works—our infrastructure solutions are built to last and serve communities.',
  },
  {
    title: 'Renovation & Remodeling',
    image: '/images/service4.jpg',
    description:
      'Transform your existing spaces with our expert renovation and remodeling services.',
  },
  {
    title: 'Green Building Solutions',
    image: '/images/service5.jpg',
    description:
      'Sustainable construction practices for eco-friendly and energy-efficient buildings.',
  },
];

const Services = () => {
  return (
    <div className="px-4 md:px-12 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Our Construction Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              title={service.title}
              image={service.image}
              description={service.description}
              buttonLabel="Learn More"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
