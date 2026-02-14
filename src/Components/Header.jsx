import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 border-t-2">

      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Logo & CV */}
        <div>
          <Link to="/" className="text-white text-sm md:text-base font-semibold">
            Hakim Ait Abderrahim
          </Link>
          <br />
          <a href="u.jpg" download className="text-xs text-gray-400 hover:text-white">
            Download CV
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12">
          <Link to="/Who" className="text-white hover:text-black">
            <button className="bg-black hover:bg-white hover:text-black transition px-4 py-1 rounded">
              Who am I ?
            </button>
          </Link>

          <Link to="/Skills" className="text-white">
            <button className="bg-black hover:bg-white hover:text-black transition px-4 py-1 rounded">
              Skills
            </button>
          </Link>

          <Link to="/Projects" className="text-white">
            <button className="bg-black hover:bg-white hover:text-black transition px-4 py-1 rounded">
              Projects
            </button>
          </Link>

          <Link to="/Contact" className="text-white">
            <button className="bg-black hover:bg-white hover:text-black transition px-4 py-1 rounded">
              Contact
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700 py-4">
          <nav className="flex flex-col gap-4 text-center">
            <Link onClick={() => setOpen(false)} to="/Who" className="text-white">Who am I ?</Link>
            <Link onClick={() => setOpen(false)} to="/Skills" className="text-white">Skills</Link>
            <Link onClick={() => setOpen(false)} to="/Projects" className="text-white">Projects</Link>
            <Link onClick={() => setOpen(false)} to="/Contact" className="text-white">Contact</Link>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
