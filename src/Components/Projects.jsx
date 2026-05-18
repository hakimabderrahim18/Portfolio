import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Learning Platform',
    description: 'A full-featured platform with authentication, course management, and real-time communication.',
    image: 'a1.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/hakimabderrahim18',
  },
  {
    title: 'Gaming Store',
    description: 'An e-commerce store covering multiple gaming platform categories with a clean UI.',
    image: 'a3.png',
    tags: ['React', 'Express', 'CSS'],
    github: 'https://github.com/hakimabderrahim18',
  },
  {
    title: 'Social App Clone',
    description: 'A social media clone with posts, likes, and a responsive feed layout.',
    image: 'a2.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/hakimabderrahim18',
  },
  {
    title: 'Malik Store',
    description: 'A sales management system (Système de Gestion des Ventes) built for retail.',
    image: 'MalikStore.png',
    tags: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/hakimabderrahim18',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full px-6 sm:px-12 md:px-24 py-14">

      {/* Title */}
      <div className="mb-10">
        <p className="text-accent text-xs uppercase tracking-widest mb-2">What I built</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold">Projects</h1>
        <div className="divider divider-accent mt-3 w-24"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map(({ title, description, image, tags, github }) => (
          <div key={title} className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-lg">
            {/* Image */}
            <div className="relative overflow-hidden h-44">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-accent transition-colors p-2 rounded-full"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <h2 className="text-white font-semibold text-base mb-1">{title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects;
