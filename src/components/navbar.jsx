'use client'
import React from 'react'
import { FaPerson } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { useState, useEffect, useRef} from 'react';
import { GrClose } from "react-icons/gr";



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef(null);
  const toggle=()=>{
    setOpenMenu(!openMenu)
  }


  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrolledPercentage = (scrollPosition / totalHeight) * 100;
    setScrollPercentage(scrolledPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Calculate the maximum movement distance
  const maxMoveDistance = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      // Assuming icon width is approximately 10% of the container, adjust as necessary
      const iconWidth = containerWidth * 0.1;
      return containerWidth - iconWidth;
    }
    return 0;
  };

  const iconTransform = () => {
    const moveDistance = maxMoveDistance();
    // Calculate the translateX value based on the scroll percentage
    const translateX = (scrollPercentage / 100) * moveDistance;
    return `translateX(${translateX}px)`;
  };



  return (
    <div className='sticky top-0'>
    <div className='font-noto-sans text-[34px]  h-[80px]  glass-effect'>
      <div ref={containerRef}  className='flex justify-between w-full items-center p-3'>
        <div  style={{ transform: iconTransform() }}>
          <a href='/'>
        <FaPerson className='cursor-pointer h-14 w-11 hover:text-green-600 ml-10'/>
          </a>
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
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]'>Menu item 1</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]'>Menu item 2</li>
  <li className='cursor-pointer bg-[#ddf3b29f] rounded-xl p-2 hover:bg-[#ddf3b2ed]'>Menu item 3</li>
</ul>

</div>)}
    </div>
    </div>
  )
}

export default Navbar
