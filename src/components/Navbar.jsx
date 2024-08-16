import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white py-2 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold w-28 flex items-end">
          <Link to="hero" smooth={true} duration={500}>
            <img
              src="image/logo.png"
              alt="Logo"
              className="w-full h-auto"  /* Adjust width and height as needed */
            />
          </Link>
          <p className="text-xs">Celebrate Pakistan</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="hero" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer">
            Home
          </Link>
          <Link to="culture" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer">
           Founders
          </Link>
          <Link to="heroes" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer">
            Heroes Of Pakistan
          </Link>
          <Link to="famous-places" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer">
            Famous Places
          </Link>
          <Link to="founders" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer">
             Culture
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none text-xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <Link to="hero" smooth={true} duration={500} className="block py-2 hover:bg-gray-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="culture" smooth={true} duration={500} className="block py-2 hover:bg-gray-700" onClick={toggleMenu}>
            Founders
          </Link>
          <Link to="heroes" smooth={true} duration={500} className="block py-2 hover:bg-gray-700" onClick={toggleMenu}>
            Heroes Of Pakistan
          </Link>
          <Link to="famous-places" smooth={true} duration={500} className="block py-2 hover:bg-gray-700" onClick={toggleMenu}>
            Famous Places
          </Link>
          <Link to="founders" smooth={true} duration={500} className="block py-2 hover:bg-gray-700" onClick={toggleMenu}>
          Culture
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
