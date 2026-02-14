import React from 'react'

const Who = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col md:flex-row px-6 sm:px-12 md:px-52 py-10 gap-10">

      {/* Text Section */}
      <div className="w-full flex flex-col justify-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Introduction
        </h1>

        <div className="divider divider-accent my-4"></div>

        <p className="text-white text-sm sm:text-base leading-relaxed">
          As a dedicated full-stack developer, I am passionate about crafting innovative and user-centric web applications. 
          With a strong foundation in both front-end and back-end development, I thrive on turning ideas into tangible digital experiences.
          <br /><br />
          My expertise spans across a wide range of technologies, including HTML, CSS, JavaScript, React, Node.js, MongoDB. 
          I am proficient in responsive design, agile development, and RESTful APIs.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

          <div>
            <h4 className="text-white font-semibold text-lg">Languages</h4>
            <ul className="text-white mt-2 space-y-1">
              <li>FR +++</li>
              <li>AR +++++</li>
              <li>ENG +++++</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg">Education</h4>
            <p className="text-white mt-2">
              Bachelor degree in Computer Systems — Ibn Khaldoun University
            </p>
          </div>

        </div>

      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img 
          className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover rounded-xl"
          src="ee.jpg" 
          alt="profile"
        />
      </div>

    </div>
  )
}

export default Who;
