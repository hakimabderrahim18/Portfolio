import React from 'react'
import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const contactItems = [
  {
    icon: <FaSquareFacebook size={18} />,
    label: 'Hakim ait abderrahim',
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FaPhoneAlt size={16} />,
    label: '0797060052',
    href: 'tel:0797060052',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'hakimabderrahim18',
    href: 'https://github.com/hakimabderrahim18',
  },
  {
    icon: <CgMail size={18} />,
    label: 'Hakimaitabderrahim18@gmail.com',
    href: 'mailto:Hakimaitabderrahim18@gmail.com',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-8 py-14 md:py-0">
        <div className="max-w-md w-full">

          <p className="text-accent text-xs uppercase tracking-widest mb-2">Get in touch</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Contact Me
          </h1>

          <div className="divider divider-accent my-4"></div>

          <p className="text-gray-400 text-sm md:text-base">
            Ready to collaborate? Feel free to reach out — I&apos;m always open to new opportunities.
          </p>

          <ul className="mt-8 space-y-4">
            {contactItems.map(({ icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-3 items-center text-gray-300 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform">{icon}</span>
                  <span className="break-all">{label}</span>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-auto">
        <img
          src="mn.jpg"
          alt="contact"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

    </div>
  );
};

export default Contact;
