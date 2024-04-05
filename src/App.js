import "./App.css";
import React, { useRef } from 'react';
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Technologies from "./components/Technologies";
import Portrait from "./components/portrait";

function App() {

  const sectionRef = useRef(null);

  const heroSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const technologiesSectionRef = useRef(null);
  // Define more refs as needed for each section

  // Function to handle navigation to a section
  const scrollToSection = (sectionRef) => {
    console.log(sectionRef.current); 
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mainmain">
    <div className="  bg-slate-100">
      <Navbar ref={sectionRef} scrollToSection={scrollToSection} heroRef={heroSectionRef} projectsRef={projectsSectionRef} technologiesRef={technologiesSectionRef}/>
      {/**fill in styled divs with components that make up application */}
      <div className="bg-[#88b5bb51] h-[90vh] w-full  sectional ">
        {/**make |hero section| sections with styled div*/}
        <div className="grid  grid-cols-2 items-center">
          <Header />
          {/**Main title or welcome message */}
          <p className="flex justify-start font-raleway font-thin text-[25px] mt-[6rem]">
            First, thank you for taking the time to visit my page. You are here
            to view my skills and understand why we should engage in business. I
            want my technology and skills to benefit you and fit your needs. As
            we peel back the layers of my full-stack development capabilities,
            you'll discover solutions that have propelled businesses forward. My
            portfolio you are seeking is not just coding exercises; they are a
            testament to strategic problem-solving and cutting-edge design.
            Prepare to witness how my expertise can transform your ideas into
            reality, leaving you anticipating the untapped potential we can
            unlock together.
          </p>
        </div>
      </div>
      <div className="bg-[#2c5d63] h-[90vh] w-full text-center  sectional ">
        <div class="custom-shape-divider-bottom-1712158986">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
              fill="#88b5bb51"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
              fill="#849b9e"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
              fill="#88b5bb51"
            ></path>
          </svg>
        </div>

        {/**make sections with styled div*/}
        <h1 className="font-roboto font-bold text-4xl moving-text tracking-widest my-10 shadow-2xl bg-slate-300 p-2 rounded-xl">
           PROJECTS💡
        </h1>
    

        <Carousel/>

        {/**put carousel displaying projects HERE in a seperate component*/}
      </div>
      <div className="bg-[#c1a03fd5] h-[100vh] w-full snap-center">
<div class="custom-shape-divider-top-1712164460">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#2c5d63"></path>
    </svg>
</div>

        <Technologies />
      </div>
      <div className="bg-[#e3cccc] h-[90vh] w-full  sectional">
        {/**make sections with styled div*/} 
        {/**image blob*/}
        {/* <svg viewBox="15 16 200 200" xmlns="http://www.w3.org/2000/svg">
<clipPath id="clipBlob">
  <path d="M21.4,-39.7C28.7,-28.6,36.2,-24.3,46.3,-16.9C56.3,-9.4,68.9,1.1,72.1,13.5C75.2,25.9,69,40.2,59.4,51.8C49.8,63.5,36.9,72.5,24.1,71.5C11.2,70.5,-1.5,59.4,-16.1,55.1C-30.7,50.7,-47.2,52.9,-55.7,46.4C-64.1,39.9,-64.6,24.6,-63.1,11.3C-61.5,-2,-58,-13.5,-55.2,-27.6C-52.4,-41.7,-50.4,-58.6,-41.4,-68.8C-32.3,-79.1,-16.2,-82.8,-4.6,-75.7C7.1,-68.6,14.1,-50.8,21.4,-39.7Z" transform="translate(55 65)  scale(0.6)" />
</clipPath>
<image href={image} width="100" height="100" clip-path="url(#clipBlob)" />
</svg> */}
<Portrait/>
        {/**image blob */}

      </div>
      <div className="bg-[#2c5d63] h-[90vh] w-full  sectional">
        {/**make sections with styled div*/}
        Social links 
        contact CTA/FORUM
      </div>
    </div>

    </div>

    
  );
}

export default App;
