import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Services = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/service');
        const json = await res.json();
        if (res.ok) {
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
          {dbProjects.map((project) => (
            <Card
              key={project._id}
              card={project}
              setSelectedCard={(c) =>
                setSelectedCard({
                  ...c,
                  largeImage: c.image,
                  detailedDescription: c.description,
                })
              }
            />
          ))}
        </div>

        {selectedCard && (
          <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </div>
    </div>
  );
};

export default Services;
