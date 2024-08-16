// src/components/UnityInDiversity.jsx
import React from 'react';

const provinces = [
  {
    name: 'Sindh',
    image: 'https://www.aboutpakistan.com/blog/wp-content/uploads/2020/07/Sindhi-Culture.jpg',
    description: 'Explore the unique traditions, languages, and festivals of Sindh.',
  },
  {
    name: 'Punjab',
    image: 'https://i.brecorder.com/primary/2022/03/622e8d506cb63.jpg',
    description: 'Discover the rich cultural heritage of Punjab.',
  },
  {
    name: 'Balochistan',
    image: 'https://www.balochistanvoices.com/wp-content/uploads/2016/06/Bclf-1021x580.jpg',
    description: 'Experience the diverse traditions and languages of Balochistan.',
  },
  {
    name: 'Khyber Pakhtunkhwa',
    image: 'https://image.slidesharecdn.com/kpkculturemilyas918-fms-150905081047-lva1-app6892/85/Kpk-culture-24-320.jpg',
    description: 'Learn about the vibrant culture and history of Khyber Pakhtunkhwa.',
  },
  {
    name: 'Gilgit-Baltistan',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr7lvaaM9E5t2qFg-myfMgQp1eZBtDlK3u44uU-uNumVhJDPNURpR1uKcUGWUUxCKHcRPb1Yzcv-xrcXxUSDeubmlRaFC7zRv6nc95F9ULf5EZQr-laVerluS1bJwLm8JPTRQZTppkyaXU6X31sOSNNE843D3q_1AcOQyIXDhBRuAOtOjtseXjT-YF/s500/culture..jpg',
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
