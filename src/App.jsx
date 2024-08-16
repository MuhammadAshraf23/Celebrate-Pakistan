import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UnityInDiversity from './components/UnityInDiversity';
import TributeToFounders from './components/TributeToFounders';
import HeroesOfPakistan from './components/HeroesOfPakistan';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import FamousPlaces from './components/FamousPlaces';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="founders">
        <TributeToFounders />
      </div>
      <div id="heroes">
        <HeroesOfPakistan />
      </div>
      <div id="famous-places">
        <FamousPlaces />
      </div>
      <div id="culture">
        <UnityInDiversity />
      </div>
      <div id="conclusion">
        <Conclusion />
      </div>
      <Footer />
    </div>
  );
};

export default App;
