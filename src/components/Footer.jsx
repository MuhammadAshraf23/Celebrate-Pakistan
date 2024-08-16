// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-4">
        <p className="mb-4">Follow Us</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400">Instagram</a>
        </div>
        <p className="mt-8">© 2024 SheInnovates Pakistan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
