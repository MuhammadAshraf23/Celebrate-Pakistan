// src/components/HeroesOfPakistan.jsx
import React from 'react';

const heroes = [
  {
    name: 'Malala Yousafzai',
    image: 'image/malala.jpg',
    description: 'Education activist and the youngest Nobel Prize laureate.',
  },
  {
    name: 'Abdul Sattar Edhi',
    image: '/image/sattar.jpg',
    description: 'Philanthropist and founder of the Edhi Foundation, serving humanity.',
  },
  {
    name: 'Arfa Karim',
    image: 'image/arfa.jpg',
    description: 'The world’s youngest Microsoft Certified Professional at age nine.',
  },
  {
    name: 'Dr. Abdul Qadeer Khan',
    image: 'image/qadir.webp',
    description: 'Nuclear physicist and a key figure in Pakistan’s nuclear program.',
  },
  {
    name: 'Benazir Bhutto',
    image: 'image/benazir.jpg',
    description: 'First woman to head a democratic government in a majority Muslim nation.',
  },
  {
    name: 'M. M. Alam',
    image: 'https://www.bolnews.com/wp-content/uploads/2020/03/MM-Alam-2.jpg1000-x-500.jpg',
    description: 'Air Commodore who is remembered for his dogfights during the Indo-Pak war of 1965.',
  },
];

const HeroesOfPakistan = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Honoring the Champions of Change</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={hero.image} alt={hero.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{hero.name}</h3>
              <p className="text-gray-700">{hero.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroesOfPakistan;
