import React from 'react'
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaWordpressSimple } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
{/**tech stacks */}
const Technologies = () => {
  return (
    <div>
        <div className='font-roboto font-bold text-4xl moving-text tracking-widest my-10 shadow-2xl bg-slate-300 p-2 rounded-xl'>TECHNOLOGY TOOLBOX 🧰</div>
        <div className='flex gap-4 justify-center'>
         <FaPython />
      <SiJavascript />
        <FaNode />
        <FaJava />
        <FaReact />
        <TbBrandNextjs />
        <BiLogoPostgresql />
        <SiMongodb />
        <GrMysql />
        <FaWordpressSimple />
        <SiTypescript />
        </div>
    </div>
  )
}

export default Technologies
