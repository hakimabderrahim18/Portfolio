import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";import { CgMail } from "react-icons/cg";


import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='h-screen w-full flex items-stretch'>
      <div className='w-1/2 h-full bg-black'>
      <div className='bg-black sm:w-48 sm:h-48 md:w-96 md:h-96 sm:ml-10 mt-16 md:ml-48 flex flex-col'>
            <h1 >Contact ME</h1>
            <div className='divider divider-accent '></div>
            <p>Let's Connect !! &nbsp;

Ready to collaborate? Feel free to reach out using the information below:
            </p>
            <ul className='md:pl-28 pt-12'>
                <li className='flex gap-2 mt-1'> </li>
                <li className='flex gap-2 mt-1'><FaSquareFacebook/>Hakim ait abderrahim</li>
                <li className='flex gap-2 mt-1'><FaPhoneAlt/>0797060052</li>
                <li className='flex gap-2 mt-1'><FaGithub/>hakimabderrahim18</li>
                <li className='flex gap-2 mt-1'><CgMail />Hakimaitabderrahim18@gmail.com</li>
            </ul>
      </div>
      </div>
      <div className='w-1/2 h-full '>
      <img src="mn.jpg" alt=""className=' h-full w-full  ' />
      </div>
      
    </div>
  )
}

export default Contact
