import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `px-4 py-1 rounded text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'bg-white text-black'
      : 'text-gray-300 hover:bg-white hover:text-black'
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `py-2 text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-white font-bold underline underline-offset-4' : 'text-gray-400 hover:text-white'
  }`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-black/90">

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo & CV */}
        <div className="flex flex-col">
          <NavLink to="/" className="text-white text-sm md:text-base font-bold tracking-wide">
            Hakim Ait Abderrahim
          </NavLink>
          <a href="u.jpg" download className="text-xs text-gray-500 hover:text-accent transition-colors duration-200">
            Download CV ↓
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/Who" className={navLinkClass}>Who am I?</NavLink>
          <NavLink to="/Skills" className={navLinkClass}>Skills</NavLink>
          <NavLink to="/Projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/Contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1 rounded hover:bg-gray-800 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 py-4">
          <nav className="flex flex-col gap-1 px-4">
            <NavLink onClick={() => setOpen(false)} to="/Who" className={mobileNavLinkClass}>Who am I?</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/Skills" className={mobileNavLinkClass}>Skills</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/Projects" className={mobileNavLinkClass}>Projects</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/Contact" className={mobileNavLinkClass}>Contact</NavLink>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
