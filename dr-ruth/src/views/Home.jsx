import React from "react";
import "./main.css";
// import structure for web
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Section1 from "../components/sections/section1/Section1";
import Especialidades from "../components/sections/section2/Especialidades";
import Nosotros from "../components/sections/section3/Nosotros";
import Galeria from "../components/sections/section4/Galeria";
import Map from "../components/sections/section5/Map";
import Contacto from "../components/sections/section6/Contacto";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import Slide01 from "../assets/carousel/c1.jpg";
import Slide02 from "../assets/carousel/c2.jpg";
import Slide03 from "../assets/carousel/c3.jpg";

export default function Home() {
  return (
    <div className="container-home">
      <div className="container-hero" id="inicio">
        <div className="container-na">
          <NavBar />
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={Slide01} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide02} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide03} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section1">
        <Section1 />
      </div>
      <div className="section2">
        <Especialidades />
      </div>
      <div className="section3">
        <Nosotros />
      </div>
      <div className="section4">
        <Galeria />
      </div>
      <div className="section5">
        <Map/>
      </div>
      <div className="section6">
        <Contacto />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}
