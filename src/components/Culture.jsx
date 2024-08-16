// src/components/Culture.jsx
import React from 'react';

const cultureData = [
  {
    id: 1,
    image: '/image/culture1.jpg',
    title: 'Traditional Arts',
    description: 'Explore the intricate and beautiful traditional arts of Pakistan, including pottery, textiles, and painting.',
  },
  {
    id: 2,
    image: '/image/culture2.jpg',
    title: 'Festivals',
    description: 'Experience the vibrant festivals of Pakistan, from colorful cultural events to traditional religious celebrations.',
  },
  {
    id: 3,
    image: '/image/culture3.jpg',
    title: 'Landmarks',
    description: 'Discover Pakistan\'s historical and architectural landmarks, reflecting its rich history and heritage.',
  },
  // Add more objects as needed
];

const Culture = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Celebrating Pakistan's Rich Culture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureData.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
