import React from 'react'

const skills = [
  { name: 'React JS', img: 'react.png', category: 'Frontend' },
  { name: 'MongoDB', img: 'mongo.png', category: 'Database' },
  { name: 'Express JS', img: 'ejs.png', category: 'Backend' },
  { name: 'Communication', img: 'comm.png', category: 'Soft Skill' },
  { name: 'Problem Solving', img: 'pr.jpg', category: 'Soft Skill' },
  { name: 'Team Work', img: 'tw.jpg', category: 'Soft Skill' },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 sm:px-12 md:px-24 py-14">

      {/* Title */}
      <div className="mb-10">
        <p className="text-accent text-xs uppercase tracking-widest mb-2">What I know</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold">Skills</h1>
        <div className="divider divider-accent mt-3 w-24"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map(({ name, img, category }) => (
          <div key={name} className="card bg-base-100 image-full shadow-xl group overflow-hidden hover:scale-105 transition-transform duration-300">
            <figure><img src={img} alt={name} className="w-full h-full object-cover group-hover:brightness-50 transition duration-300" /></figure>
            <div className="card-body p-3 flex flex-col justify-end">
              <span className="text-xs text-accent font-medium uppercase tracking-wider">{category}</span>
              <h2 className="card-title text-sm">{name}</h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills;
