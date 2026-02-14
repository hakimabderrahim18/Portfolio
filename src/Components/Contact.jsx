import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-6">
        <div className="max-w-md text-center md:text-left">

          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Contact Me
          </h1>

          <div className="divider divider-accent my-4"></div>

          <p className="text-white text-sm md:text-base">
            Let's Connect!! <br />
            Ready to collaborate? Feel free to reach out using the information below:
          </p>

          <ul className="mt-8 space-y-3 text-white text-sm md:text-base">
            <li className="flex gap-2 items-center justify-center md:justify-start">
              <FaSquareFacebook /> Hakim ait abderrahim
            </li>

            <li className="flex gap-2 items-center justify-center md:justify-start">
              <FaPhoneAlt /> 0797060052
            </li>

            <li className="flex gap-2 items-center justify-center md:justify-start">
              <FaGithub /> hakimabderrahim18
            </li>

            <li className="flex gap-2 items-center justify-center md:justify-start break-all">
              <CgMail /> Hakimaitabderrahim18@gmail.com
            </li>
          </ul>

        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-auto">
        <img
          src="mn.jpg"
          alt="contact"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default Contact;
