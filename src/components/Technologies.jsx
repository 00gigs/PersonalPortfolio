import React from 'react'
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";

{/**tech stacks */}
const Technologies = () => {
  return (
    <div className='w-full'>
        <div className='text-5xl moving-text'>TECHNOLOGIES</div>
        <div className='flex'>
         <FaPython />
      <SiJavascript />
        <FaNode />
        <FaJava />
        </div>
    </div>
  )
}

export default Technologies
