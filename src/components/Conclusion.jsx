// src/components/Conclusion.jsx
import React from 'react';

const Conclusion = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Us in Celebrating Pakistan</h2>
        <p className="text-xl md:text-2xl mb-8">
          Let’s come together to honor our heritage, celebrate our diversity, and recognize the contributions of our heroes.
        </p>
        <a href="#footer" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Conclusion;
