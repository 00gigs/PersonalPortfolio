import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../src/App.css";

// import required modules
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h "
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>project 1 Descript</SwiperSlide>
            <SwiperSlide>project 1 Screenshot Slide 1</SwiperSlide>
            <SwiperSlide> project 1 Screenshot Slide 2</SwiperSlide>
            <SwiperSlide> project 1 Screenshot Slide 3</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>project 2 Descript</SwiperSlide>
            <SwiperSlide>project 2 Screenshot Slide 1</SwiperSlide>
            <SwiperSlide>project 2 Screenshot Slide 2</SwiperSlide>
            <SwiperSlide>project 2 Screenshot Slide 3</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v horizontal-spacing"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>project 3 Descript</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 1</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 2</SwiperSlide>
            <SwiperSlide>project 3 Screenshot Slide 3</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Carousel;