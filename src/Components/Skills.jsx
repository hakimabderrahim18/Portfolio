import React from 'react'

const Skills = () => {
  return (
    <div className=' flex flex-col sm:h-screen md:h-screen'>
        <div className='md:pl-96 sm:pl-20'>
            <h1 className='sm:text-2xl md:text-4xl'>Skills Section</h1>
            <div className='divider divider-accent '></div>
        </div>
        <div className='flex flex-nowrap sm:w-40 '>



        <div>
            
        <div className="card  bg-base-100 image-full md:w-96 sm:mr-5 shadow-xl md:mr-48">
  <figure>
    <img
    
      src="react.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">React Js</h2>
    
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
        





        <div><div className="card  bg-base-100 image-full md:w-96 shadow-xl md:mr-48 sm:mr-5">
  <figure>
    <img
      src="mongo.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Mongo Db</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div></div>




        <div><div className="card bg-base-100 image-full md:w-96 shadow-xl ">
  <figure>
    <img
      src="ejs.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Express js</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

    
    
    



        </div>
        <div className='flex flex-nowrap'>

        <div>
            
        <div className='divider divider-accent '></div>
            <div className="card sm:w-48 sm:mr-5  bg-base-100 image-full  md:w-96 shadow-xl md:mr-48">
      <figure>
        <img
          src="comm.png"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Communication </h2>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
            </div>



            
<div>
            
            <div className='divider divider-accent'></div>
            <div className="card  bg-base-100 sm:w-36 sm:ml-5 image-full md:w-96 shadow-xl md:mr-48">
      <figure>
        <img
          src="pr.jpg"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Problem resolving</h2>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
            </div>

                   
<div className=''>
    
<div className='divider divider-accent w-96 sm:w-64'></div>
            
            <div className="card   bg-base-100 image-full sm:ml-5 sm:w-16  md:w-96 shadow-xl md:mr-48">
      <figure>
        <img
          src="tw.jpg"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Team Work</h2>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
            </div>









        </div>
      
    </div>
  )
}

export default Skills
