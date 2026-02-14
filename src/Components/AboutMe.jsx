import React from 'react'
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          className="w-full h-full object-cover"
          src="es.jpg"
          alt="about"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Welcome
          </h1>

          <div className="divider divider-accent my-4"></div>

          <h2 className="text-white text-xl md:text-3xl">
            to my Portfolio
          </h2>

          <Link to="/Who">
            <button className="mt-8 px-8 py-3 border border-white text-white 
              hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
              Explore
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
