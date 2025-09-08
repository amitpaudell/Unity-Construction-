import React from 'react';
import Card from '../components/Card';
import { FaUserTie, FaTools, FaHandshake, FaLeaf } from 'react-icons/fa';

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

const whyChooseUs = [
  {
    title: 'Expertise & Experience',
    description:
      'Our team brings decades of combined experience, ensuring every project is handled with unmatched skill and professionalism.',
    icon: <FaUserTie className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Quality & Innovation',
    description:
      'We use the highest quality materials and the latest construction technologies to deliver results that exceed expectations.',
    icon: <FaTools className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Transparency & Trust',
    description:
      'We believe in open communication and honest processes, building lasting relationships with our clients based on trust.',
    icon: <FaHandshake className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Sustainability',
    description:
      'Our commitment to sustainable practices ensures that our projects are environmentally responsible and future-ready.',
    icon: <FaLeaf className="w-8 h-8 text-blue-600" />,
  },
];

const testimonials = [
  {
    name: 'Amit Sharma',
    image: '/images/testimonial1.jpg',
    text: 'Unity Construction exceeded our expectations. The team was professional, transparent, and delivered our dream home on time. Highly recommended!',
    title: 'Homeowner',
  },
  {
    name: 'Priya Desai',
    image: '/images/testimonial2.jpg',
    text: 'Their attention to detail and commitment to quality is unmatched. Our office complex is both beautiful and functional.',
    title: 'Business Owner',
  },
  {
    name: 'Rahul Verma',
    image: '/images/testimonial3.jpg',
    text: 'From planning to execution, Unity Construction made the process seamless. We appreciate their sustainable approach.',
    title: 'Project Manager',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-12 bg-gray-50 pt-8">
        {/* Left Side: Heading and Description */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unity Construction
          </h1>
          <p className="text-lg text-gray-600">
            At Unity Constructions, we believe that every project is more than
            just bricks and mortar—it is a vision brought to life. We are
            committed to delivering high-quality construction solutions that
            combine innovation, precision, and sustainability. Whether it’s
            residential spaces, commercial complexes, or large-scale
            infrastructure, our goal is to create structures that stand the test
            of time and reflect the trust of our clients. With a team of
            experienced professionals and a dedication to excellence, we handle
            every stage of the process—from planning and design to execution and
            completion—with transparency and care. Our platform showcases a
            diverse portfolio of completed and ongoing projects, highlights our
            wide range of services, and gives you a closer look at the people
            behind the work.
          </p>
        </div>
        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/cover.jpg"
            alt="Unity Construction"
            className="rounded-lg shadow-lg max-w-3xl md:max-w-4xl w-full object-cover h-[28rem] md:h-[36rem]"
          />
        </div>
      </div>
      {/* Services Section */}
      <div className="mt-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Construction Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              title={service.title}
              image={service.image}
              description={service.description}
              buttonLabel="Read More"
            />
          ))}
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="mt-20 px-4 md:px-12 py-12 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
          At Unity Construction, we don’t just build structures—we build trust,
          relationships, and a legacy of excellence. Our commitment to quality,
          innovation, and transparency sets us apart in the construction
          industry. Here’s why clients continue to choose us for their most
          important projects:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="mt-20 px-4 md:px-12 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Testimonials
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
          Hear from our satisfied clients who have experienced the Unity
          Construction difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <p className="text-gray-700 italic mb-4 text-center">
                "{testimonial.text}"
              </p>
              <div className="text-blue-700 font-semibold">
                {testimonial.name}
              </div>
              <div className="text-gray-500 text-sm">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
