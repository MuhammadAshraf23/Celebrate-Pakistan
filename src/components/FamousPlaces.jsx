// src/components/FamousPlaces.jsx
import React from 'react';

const famousPlaces = [
  {
    name: 'Badshahi Mosque',
    image: 'https://w0.peakpx.com/wallpaper/835/227/HD-wallpaper-badshahi-mosque-mo-lahore-muslim-pakistan.jpg',
    description: 'The Badshahi Mosque in Lahore is a magnificent example of Mughal architecture, and one of the largest mosques in the world.',
  },
  {
    name: 'Mohenjo-daro',
    image: 'https://www.shutterstock.com/image-photo/mohenjo-daro-temple-indus-civilization-260nw-1075655459.jpg',
    description: 'An ancient Indus Valley Civilization city, Mohenjo-daro is one of the world’s earliest major urban settlements.',
  },
  {
    name: 'Hunza Valley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Rakaposhi%2C_Nagar_GB_%28Pakistan%29.jpg',
    description: 'Hunza Valley is renowned for its stunning landscapes, snow-capped peaks, and vibrant local culture.',
  },
  {
    name: 'Quaid-e-Azam\'s Mausoleum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mazar_Quaid-e-Azam.jpg/1280px-Mazar_Quaid-e-Azam.jpg',
    description: 'The final resting place of Muhammad Ali Jinnah, the founder of Pakistan, located in Karachi.',
  },
  {
    name: 'Shangrila Lake',
    image: 'https://indyguide-web-development.s3.us-east-2.amazonaws.com/listings/images/Indus-River-Valley-Skardu-1646239995322.jpg',
    description: 'Shangrila Lake, also known as Lower Kachura Lake, is a serene and picturesque spot in Skardu, renowned for its crystal-clear waters, surrounding mountains, and the famous Shangrila Resort.',
  },
  {
    name: 'Faisal Mosque',
    image: 'https://media.istockphoto.com/id/1372621727/photo/faisal-mosque.jpg?s=612x612&w=0&k=20&c=IIRrKM_Drv_kmdnLtbrR3n0aq9Bj3MDMJxehe2bPTbE=',
    description: 'Faisal Mosque in Islamabad is Pakistan’s largest mosque, known for its unique tent-like design and scenic location at the foot of the Margalla Hills.',
  },
];

const FamousPlaces = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Famous Places in Pakistan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {famousPlaces.map((place, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-700">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousPlaces;
