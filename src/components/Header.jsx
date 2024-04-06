import React, { useRef, useEffect } from 'react'

import gsap from "gsap";
const Header = () => {
    const textRef = useRef(null);

    useEffect(() => {
      // Animate your text using GSAP
      const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

    // Initial bounce in effect
    tl.fromTo(textRef.current, 
      { opacity: 0, y: -250 }, 
      { opacity: 1, y: 90, duration: 1.5, ease: 'bounce.out' }
    );

    // Continuous floating effect after the bounce in
    tl.to(textRef.current, {
      y: '70', // Move up. Adjust the value to control the height of the movement.
      repeat: -1, // Infinite repeats
      yoyo: true, // Go back and forth between the starting and ending values
      duration: 1.5,
       // Duration of the up and down movement
    });
    }, []); // Empty dependency array ensures this runs once on mount
  

  return (
    <div className="mb-12">
       {/* Apply the ref to your text element */}
       <h1 ref={textRef}  className='font-rubik font-bold text-3xl ml-4 mt-3 md:text-5xl'>MEET JAMES HARRINGTON THE FULLSTACK DEVELOPER👨🏻‍💻</h1>
    </div>
  )
}

export default Header
