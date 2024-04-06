'use client'
import React from 'react'
import { FaPerson } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { useState, useEffect, useRef} from 'react';
import { GrClose } from "react-icons/gr";

{/* implement status bar*/}

const Navbar = ({ scrollToSection, AboutSectionRef, projectsRef, technologiesRef,contactRef }) => {

  const [openMenu, setOpenMenu] = useState(false)
  
  const containerRef = useRef(null);
  const toggle=()=>{
    setOpenMenu(!openMenu)
  }

  return (
    <div className='sticky top-0 z-50'>
    <div className='font-noto-sans text-lg md:text-[34px] h-16 md:h-[80px] glass-effect'>
      <div ref={containerRef}  className='flex justify-between items-center p-2 md:p-3'>
        <div  className='ml-[1rem] bg-black text-white rounded-xl text-[28px] p-1 font-poppins uppercase hover:text-green-100 hover:duration-500 hover:tracking-widest'>
      <button onClick={()=>scrollToSection(contactRef)}>
          Consult Now{/**once clicked should snap scroll to contact forum  */}
      </button>
        </div>
      <div className='flex gap-6'>
      </div>
        <div className='cursor-pointer'>
        {!openMenu && <RiMenu5Line className='text-2xl md:text-3xl' onClick={toggle} />}
        {openMenu && <GrClose className='text-2xl md:text-3xl' onClick={toggle} />}
        </div>
      </div>
    </div>
    <div>
     
 {openMenu && (<div className='flex glass-effect h-14 justify-end' 
><ul className='flex gap-4 md:gap-10 my-2 mr-4 md:mr-7'>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(AboutSectionRef)}>ME</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(projectsRef)}>PROJECTS</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(technologiesRef)}>TECHNOLOGIES</li>
</ul>

</div>)}
    </div>
    </div>
  )
}

export default Navbar
