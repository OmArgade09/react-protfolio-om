import React from 'react'
import logo from "../assets/omlogo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {RiReactjsLine} from "react-icons/ri"

const Navbar = () => {

   const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/om-argade-499553233/', '_blank'); // Replace with your LinkedIn URL
  };

  const handleGithubClick = () => {
      window.open('https://github.com/OmArgade09', '_blank'); // Replace with your GitHub URL
  };
   
   return <nav className=" mb-20 flex items-center justify-between py-6 ">
    <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-12"src={logo} alt="logo" />

         </div>
         <div className='m8 flex item-center justify-center gap-4 text-2xl'>
         <div onClick={handleLinkedInClick} className="cursor-pointer">
                   <FaLinkedin />
               </div>
               <div onClick={handleGithubClick} className="cursor-pointer">
                   <FaGithub />
               </div>
         <RiReactjsLine />
         </div>
   </nav>
   
  
}

export default Navbar