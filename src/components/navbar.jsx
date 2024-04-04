'use client'
import React from 'react'
import { FaPerson } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { useState, useEffect, useRef} from 'react';
import { GrClose } from "react-icons/gr";

{/* implement status bar*/}

const Navbar = ({ scrollToSection, heroRef, projectsRef, technologiesRef }) => {

  const [openMenu, setOpenMenu] = useState(false)
  
  const containerRef = useRef(null);
  const toggle=()=>{
    setOpenMenu(!openMenu)
  }

  return (
    <div className='sticky top-0'>
    <div className='font-noto-sans text-[34px]  h-[80px]  glass-effect'>
      <div ref={containerRef}  className='flex justify-between w-full items-center p-3'>
        <div  className='ml-[1rem] bg-black text-white rounded-xl text-[28px] p-1 font-poppins uppercase hover:text-green-100 hover:duration-500 hover:tracking-widest'>
      <button>
          Consult Now{/**once clicked should snap scroll to contact forum  */}
      </button>
        </div>
      <div className='flex gap-6'>
      </div>
        <div className='cursor-pointer'>
        {!openMenu && <RiMenu5Line onClick={toggle} />}
        {openMenu && <GrClose onClick={toggle} />}
        </div>
      </div>
    </div>
    <div>
     
 {openMenu && (<div className='flex glass-effect h-14 justify-end' 
><ul className='flex gap-10 my-2 mr-7'>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(heroRef)}>Menu item 1</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(projectsRef)}>Menu item 2</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]' onClick={() => scrollToSection(technologiesRef)}>Menu item 3</li>
</ul>

</div>)}
    </div>
    </div>
  )
}

export default Navbar
