import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../src/App.css";
import "swiper/css/autoplay";
import save1 from "../images/smartsave1.png";
import save2 from "../images/smartsave2.png";
import save3 from "../images/smartsave3.png";
import hanz1 from "../images/hanz1.png";
import hanz2 from "../images/hanz2.png";
import hanz3 from "../images/hanz3.png";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          // Configure autoplay options here
          delay: 16600, // Delay between transitions (in ms). Here it's set for 2 seconds.
          disableOnInteraction: true, // This means autoplay won't be disabled after user interactions (swipes, etc.)
        }}
      >
        <SwiperSlide>
          <div className="h-1 mt-3 font-rubik font-bold text-2xl cursor-pointer text-slate-300 hover:text-3xl shadow-2xl underline">
            <a href="https://smartsave.onrender.com">Smart Save</a>
          </div>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              // Configure autoplay options here
              delay: 4000, // Delay between transitions (in ms). Here it's set for 2 seconds.
              disableOnInteraction: true, // This means autoplay won't be disabled after user interactions (swipes, etc.)
            }}
          >
            <SwiperSlide>
              <div className="mt-6 p-1 font-semibold font-noto-sans mx-2 text-[19px]">
                This Web application was my first fullstack deployment. A fintech
                application that encourages users to be proactive about
                investing and saving using Personal Development Planning
                techniques and goals.It encompasses the frontend power of react
                and NextJs, with a MongoDB data base architecture written in javascript.
                I aded an economic news api so user can stay up to dat with the live economy and a 
                community user forum wehre users share financial tips.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={save1} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={save2} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={save3} />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-1 mt-3 font-rubik font-bold text-2xl cursor-pointer text-slate-300 hover:text-3xl shadow-2xl underline">
           <a href='/'>HANZ</a>
         </div>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              // Configure autoplay options here
              delay: 4000, // Delay between transitions (in ms). Here it's set for 2 seconds.
              disableOnInteraction: true, // This means autoplay won't be disabled after user interactions (swipes, etc.)
            }}
          >
            <SwiperSlide>
              <div className="p-2 font-semibold font-noto-sans mx-2 text-[18px]">
              Hanz , the "Thumbtack" alternative that is more cost effective ,local
              community oriented and secure as an intermediary between customer
              and laborer. The Website is built on a NextJS framework with
              React with a custom built fetch API integrated with MongoDb for
              serverSide actions. I developed this Website with a vision in mind. 
              In my younger year  I did moving and hauling on the side for extra income. I seen the potential 
              the internet can give to a business and decided to try and generate my own bulk trash leads. This led me to the creation 
              of Hanz{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={hanz1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hanz2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hanz3} />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              // Configure autoplay options here
              delay: 4000, // Delay between transitions (in ms). Here it's set for 2 seconds.
              disableOnInteraction: true, // This means autoplay won't be disabled after user interactions (swipes, etc.)
            }}
          >
            <SwiperSlide>project 3 Descript</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 1</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 2</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 3</SwiperSlide>
          </Swiper>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default Carousel;
