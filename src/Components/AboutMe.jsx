import React from 'react'
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    
    <div className='md:h-full md:w-full sm:h-full md:mt-0 sm:mt-28 sm:w-full bg-black  flex items-stretch'>
      <div className='bg-white place-self-center     w-1/2 h-full'>
      <img className=' w-full h-full' src='es.jpg'/>
      </div>
    <div className='bg-black w-1/2'>
      <div className='md:mt-52'>
    <h1>&nbsp;&nbsp;Welcome <div className='divider divider-accent'></div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to my Portfolio </h1>
    <Link  to='/Who'><button className='bg-white text-black hover:text-white hover:bg-black md:ml-96 md:mt-10 sm:ml-48 sm:mt-10'>explore</button></Link></div>
    
    </div>
    </div>
  )
}

export default AboutMe
//  <img className=' w-1/2' src='img.jpg'/>
    