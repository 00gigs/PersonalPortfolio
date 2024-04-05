import React from 'react'
import image from '../images/me.jpg'
const Portrait = () => {
  return (
    <div>  
        <svg viewBox="15 16 200 200" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="clipBlob">
      <path d="M21.4,-39.7C28.7,-28.6,36.2,-24.3,46.3,-16.9C56.3,-9.4,68.9,1.1,72.1,13.5C75.2,25.9,69,40.2,59.4,51.8C49.8,63.5,36.9,72.5,24.1,71.5C11.2,70.5,-1.5,59.4,-16.1,55.1C-30.7,50.7,-47.2,52.9,-55.7,46.4C-64.1,39.9,-64.6,24.6,-63.1,11.3C-61.5,-2,-58,-13.5,-55.2,-27.6C-52.4,-41.7,-50.4,-58.6,-41.4,-68.8C-32.3,-79.1,-16.2,-82.8,-4.6,-75.7C7.1,-68.6,14.1,-50.8,21.4,-39.7Z" transform="translate(55 65)  scale(0.6)" />
    </clipPath>
    <image href={image} width="100" height="100" clip-path="url(#clipBlob)" />
    <text x="55" y="90" fontSize="6" fill="black" fontFamily='Rubik'>More of James</text>
    <text x="65" y="99" fontSize="6" fill="black" fontFamily='Rubik'>from James...</text>
  {/* Text element for to the right of the blob */}
  <foreignObject x="110" y="17" width="100" height="111">
  <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '4pt', fontFamily: 'Rubik', color: 'black'}}>
    Why do I love development so much? I love the rush I gain when I solve a problem after it left me stumped for a couple days or few hours. I love the creativity process that goes into  development from planning to designing to implementing . I love that I can  utilize my skills where I can try my hand at solving real world issues with technology, just simply by typing on a computer. As long as its an idea that can be in words or an image, I will purse that vision  with technologies. The only difference between a dream and real life is that only you can see your dream. technology always others to see that dream.
  </div>
</foreignObject>
    </svg>
    </div>
  )
}

export default Portrait