// src/components/UnityInDiversity.jsx
import React from 'react';

const provinces = [
  {
    name: 'Sindh',
    image: 'image/sindh.jpg',
    description: 'Explore the unique traditions, languages, and festivals of Sindh.',
  },
  {
    name: 'Punjab',
    image: 'image/punjab.jpg',
    description: 'Discover the rich cultural heritage of Punjab.',
  },
  {
    name: 'Balochistan',
    image: 'image/balochistan.jpg',
    description: 'Experience the diverse traditions and languages of Balochistan.',
  },
  {
    name: 'Khyber Pakhtunkhwa',
    image: 'image/kpk.webp',
    description: 'Learn about the vibrant culture and history of Khyber Pakhtunkhwa.',
  },
  {
    name: 'Gilgit-Baltistan',
    image: 'image/balti.jpg',
    description: 'Immerse yourself in the stunning landscapes and cultures of Gilgit-Baltistan.',
  },
];

const UnityInDiversity = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Celebrating Our Diverse Cultures</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provinces.map((province, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={province.image} alt={province.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{province.name}</h3>
              <p className="text-gray-700">{province.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnityInDiversity;
