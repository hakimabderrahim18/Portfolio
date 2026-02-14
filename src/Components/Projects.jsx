import React from 'react'

const Projects = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-10">

      {/* Title */}
      <div className="text-center md:text-left md:ml-56 mt-10">
        <h1 className="text-3xl">Projects Section</h1>
        <div className="divider divider-accent"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 place-items-center w-full">

        {/* Card 1 */}
        <div className="card bg-base-100 w-full max-w-xs shadow-xl">
          <figure className="px-6 pt-6">
            <img src="a1.png" alt="" className="rounded-xl w-full h-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">E-Learning platform</h2>
            <p>A platform with authentication and communication system</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-full max-w-xs shadow-xl">
          <figure className="px-6 pt-6">
            <img src="a3.png" alt="" className="rounded-xl w-full h-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Gaming Store</h2>
            <p>Different category of gaming platforms store</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-full max-w-xs shadow-xl">
          <figure className="px-6 pt-6">
            <img src="a2.png" alt="" className="rounded-xl w-full h-48 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Social App Clone</h2>
            <p>Social app clone</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects;
