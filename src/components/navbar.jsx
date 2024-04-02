import React from 'react'
import { FaPerson } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className='font-noto-sans text-[34px] bg-[#2540449c] h-[80px]'>
      <div className='flex justify-between w-full items-center p-3'>
        <div>
        <FaPerson className='cursor-pointer h-14 w-11 hover:text-green-200 ml-10'/>
        </div>
        <div>
          {/**Main title or welcome message */}
        </div>
        <div>
          menu
        </div>
      </div>
    </div>
  )
}

export default Navbar
