import React, { useRef, useEffect } from 'react'

import gsap from "gsap";
const Header = () => {
    const textRef = useRef(null);

    useEffect(() => {
      // Animate your text using GSAP
      gsap.set(textRef.current, { opacity: 0 });
      gsap.to(textRef.current, {
        duration: 2.5, // Animation duration in seconds
        opacity:1,
        y: 100, // Move horizontally
        ease: 'bounce.out', // Type of easing (see GSAP documentation for more options)
      });
    }, []); // Empty dependency array ensures this runs once on mount
  

  return (
    <div>
       {/* Apply the ref to your text element */}
       <h1 ref={textRef}  className='font-rubik font-bold text-5xl ml-4 mt-7 '>MEET JAMES HARRINGTON THE FULLSTACK DEVELOPER👨🏻‍💻</h1>
    </div>
  )
}

export default Header
