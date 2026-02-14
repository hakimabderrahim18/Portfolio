import React from 'react'

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-10">

      {/* Title */}
      <div className="text-center md:text-left md:pl-96 mt-10">
        <h1 className="text-2xl md:text-4xl">Skills Section</h1>
        <div className="divider divider-accent"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 place-items-center">

        {/* React */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="react.png" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">React Js</h2>
          </div>
        </div>

        {/* Mongo */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="mongo.png" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Mongo DB</h2>
          </div>
        </div>

        {/* Express */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="ejs.png" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Express Js</h2>
          </div>
        </div>

        {/* Communication */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="comm.png" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Communication</h2>
          </div>
        </div>

        {/* Problem Solving */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="pr.jpg" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Problem Resolving</h2>
          </div>
        </div>

        {/* Team Work */}
        <div className="card bg-base-100 image-full w-full max-w-xs shadow-xl">
          <figure><img src="tw.jpg" alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Team Work</h2>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills;
