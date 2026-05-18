import React from 'react'
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-75"
          src="es.jpg"
          alt="about"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center px-8 py-12 md:py-0">
        <div>
          <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium">
            Full Stack Developer
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Welcome
          </h1>

          <div className="divider divider-accent my-4"></div>

          <h2 className="text-gray-300 text-xl md:text-2xl font-light">
            to my Portfolio
          </h2>

          <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto">
            Building modern web experiences with React, Node.js & MongoDB
          </p>

          <Link to="/Who">
            <button className="mt-8 px-10 py-3 border border-white text-white 
              hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-sm font-medium tracking-wide">
              Explore →
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
