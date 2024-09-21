import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (<>
    <div className='bg-black  h-14 border-b-2 border-t-2'>
      
      <div className='grid grid-flow-col justify-stretch '>
      <div className='grid grid-cols-1 ml-5'><Link  to='/' className= 'sm:text-sm md:text-md   sm:text-white'> <h6 className=' '>Hakim Ait Abderrahim</h6></Link><a href="u.jpg" download>Download CV</a></div>
      <div className='md:ml-96 sm:ml-10 '>
      <Link  to='/Who'className='text-white'> <button className='bg-black hover:text-black hover:bg-white md:mr-16 sm:mr-0'> Who am I ?</button></Link>
      <Link  to='/Skills'className='text-white'> <button className='bg-black hover:text-black hover:bg-white md:mr-16 sm:mr-0'> Skills</button></Link>
      <Link  to='/Projects'className='text-white'>  <button className='bg-black hover:text-black hover:bg-white md:mr-16 sm:-mr-4'>Projects</button></Link>
      <Link  to='/Contact'className='text-white'> <button className='bg-black hover:text-black hover:bg-white  sm:mr-0'>Contact</button></Link>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Header
//<button className='bg-black hover:text-black hover:bg-white md:mr-56 sm:-mr-10'>English</button>