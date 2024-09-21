import React from 'react';
import {  Route, Routes,BrowserRouter } from "react-router-dom";
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Who from './Components/Who';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


export default function App() {
 
  return (
    <div className='bg-black md:h-full md:w-full sm:h-full sm:w-screen   flex flex-col'>
    <Header/>

    <div className=' w-full w-full '>
    <Routes>
				<Route path='/' element={<AboutMe/>} />
        <Route path='/Who' element={<Who/>} />
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </div>
  );
}