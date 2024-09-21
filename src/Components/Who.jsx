import React from 'react'

const Who = () => {
  return (
        <div className=' bg-black flex items-stretch   w-full h-screen pl-52 py-16  pr-52 '>
            <div className=' w-full  h-full flex flex-col'>
          
            <h1>Introduction</h1>
            <div className='divider divider-accent'></div>
            <p >As a dedicated full-stack developer, I am passionate about crafting innovative and user-centric web applications. With a strong foundation in both front-end and back-end development, I thrive on turning ideas into tangible digital experiences.

My expertise spans across a wide range of technologies, including  HTML, CSS, JavaScript, React, Node.js,Mongo db. I am proficient in  responsive design, agile development, RESTful APIs.
            </p>
            <div className='flex items-stretch pt-14'>
                <div className=' h-full w-full mr-28'>
                    <h4>Languages</h4>
                    <ul>
                        <li>FR +++</li>
                        <li>AR +++++</li>
                        <li>ENG+++++</li>
                    </ul>
                </div>
                <div className=' h-full w-full'>    <h4>Education </h4>
                <p>bachelor degree in Computer systems ibn Khaldoun university </p></div>
            </div>
            </div>
            <div className=' w-1/3 h-96'><img className='w-full h-full' src="ee.jpg" alt="photo" /></div>
        </div>
      
    )
}

export default Who
