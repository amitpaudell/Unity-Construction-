import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const projects = [
  {
    title: 'Skyline Apartments',
    image: '/images/project1.jpg',
    description:
      'A modern residential complex featuring eco-friendly materials and smart home technology. Completed in 2023.',
    buttonLabel: 'View Details',
    href: '#',
  },
  {
    title: 'Unity Business Park',
    image: '/images/project2.jpg',
    description:
      'A state-of-the-art commercial hub with flexible office spaces and green zones. Completed in 2022.',
    buttonLabel: 'View Details',
    href: '#',
  },
  {
    title: 'Riverfront Bridge',
    image: '/images/project3.jpg',
    description:
      'A landmark infrastructure project connecting communities and supporting sustainable transport.',
    buttonLabel: 'View Details',
    href: '#',
  },
  {
    title: 'Greenfield School',
    image: '/images/project4.jpg',
    description:
      'An educational campus designed for collaborative learning and energy efficiency.',
    buttonLabel: 'View Details',
    href: '#',
  },
  {
    title: 'City Center Mall',
    image: '/images/project5.jpg',
    description:
      'A vibrant retail and entertainment destination with innovative architectural design.',
    buttonLabel: 'View Details',
    href: '#',
  },
  {
    title: 'Sunrise Villas',
    image: '/images/project6.jpg',
    description:
      'Luxury villas with private gardens, blending comfort and sustainability.',
    buttonLabel: 'View Details',
    href: '#',
  },
];

const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/construction');
        const json = await res.json();
        if (res.ok && Array.isArray(json)) {
          setDbProjects(json);
        }
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="px-4 md:px-12 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(dbProjects.length ? dbProjects : projects).map((project, idx) => (
            <Card
              key={project._id || idx}
              title={project.title || project.name}
              image={
                project.image
                  ? project.image
                      .replace(
                        /^([A-Z]:)?[\\/].*?[\\/]images[\\/]/i,
                        '/images/'
                      )
                      .replace(/\\/g, '/')
                  : project.image
              }
              description={project.description}
              buttonLabel={project.buttonLabel}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
