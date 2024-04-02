'use client'
import React from 'react'
import { FaPerson } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { useState } from 'react';
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggle=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <div className='font-noto-sans text-[34px]  bg-[#57c7d89c] h-[80px]'>
      <div className='flex justify-between w-full items-center p-3'>
        <div>
        <FaPerson className='cursor-pointer h-14 w-11 hover:text-green-600 ml-10'/>
        </div>
        <div className='font-rubik font-bold'>
          MEET JAMES HARRINGTON, The FullStack Engineer👨🏻‍💻
          {/**Main title or welcome message */} 
        </div>
        <div className='cursor-pointer'>
        {!openMenu && <RiMenu5Line onClick={toggle} />}
        {openMenu && <GrClose onClick={toggle} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
