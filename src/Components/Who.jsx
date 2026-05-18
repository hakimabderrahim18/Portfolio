import React from 'react'

const languages = [
  { name: 'Arabic', level: 100 },
  { name: 'English', level: 90 },
  { name: 'French', level: 80 },
];

const Who = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col md:flex-row px-6 sm:px-12 md:px-24 lg:px-40 py-14 gap-12">

      {/* Text Section */}
      <div className="w-full flex flex-col justify-center">

        <p className="text-accent text-xs uppercase tracking-widest mb-2">About me</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Introduction
        </h1>

        <div className="divider divider-accent my-4"></div>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          As a dedicated full-stack developer, I am passionate about crafting innovative and user-centric web applications.
          With a strong foundation in both front-end and back-end development, I thrive on turning ideas into tangible digital experiences.
          <br /><br />
          My expertise spans across a wide range of technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB.
          I am proficient in responsive design, agile development, and RESTful APIs.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          {/* Languages */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Languages</h4>
            <div className="space-y-3">
              {languages.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{name}</span>
                    <span className="text-gray-500">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-accent h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Education</h4>
            <div className="border-l-2 border-accent pl-4">
              <p className="text-white text-sm font-medium">Bachelor in Computer Systems</p>
              <p className="text-gray-500 text-xs mt-1">Ibn Khaldoun University</p>
            </div>
          </div>

        </div>

      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center items-start">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover rounded-xl border border-gray-800"
          src="ee.jpg"
          alt="profile"
        />
      </div>

    </div>
  )
}

export default Who;
