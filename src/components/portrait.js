import React from 'react'
import image from '../images/me.jpg'
const Portrait = () => {
  return (
   <div className="flex flex-col md:flex-row items-center text-center md:space-x-4">
      {/* SVG Blob with Image */}
      <div className="w-full max-w-xs md:max-w-none">
        <svg viewBox="0 -30 200 200" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clipBlob">
            <path fill="#FF0066" d="M49.4,-78.4C64.5,-70.2,76.8,-55,80.3,-39C83.8,-23,78.5,-11.5,78.6,2.2C78.7,15.8,84.1,31.5,76.6,41.7C69.2,51.8,48.8,56.3,31.4,65.8C14,75.3,-0.4,89.9,-16.3,89C-32.2,88.1,-64.4,71.7,-75.2,52.4C-85.9,33.1,-75.3,10.9,-67.8,-7.7C-60.3,-26.2,-55.9,-40.1,-44.9,-54.8C-33.9,-69.5,-16.9,-85,2.3,-88.4C21.5,-91.8,43,-83.6,49.4,-78.4Z" transform="translate(100 100)" />
          </clipPath>
          <image href={image} width="200" height="200" clip-path="url(#clipBlob)" />
        </svg>
      </div>

      {/* Text Content */}
      <div className=" font-rubik w-full max-w-xs md:max-w-none bg-opacity-50 bg-white p-4 rounded-lg shadow text-base lg:text-[20px]">
      Why do I love development so much? I love the rush I gain when I solve a problem after it left me stumped for a couple days or few hours. I love the creativity process that goes into  development from planning to designing to implementing . I love that I can  utilize my skills where I can solve real world issues via technology, just simply by typing on a computer. As long as its an idea that can be in words or an image, I will purse that vision  with technologies. The only difference between a dream and real life is that only you can see your dream. Technology allows others to see that dream.

      </div>
    </div>
  )
}

export default Portrait