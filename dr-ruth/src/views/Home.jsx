import React from "react";
import "./main.css";
// import structure for web
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Section1 from "../components/sections/section1/Section1";
import Especialidades from "../components/sections/section2/Especialidades";
import Section3 from "../components/sections/section3/Section3";
import Section4 from "../components/sections/section4/Section4";
import Carousel from "../components/carousel/Carousel";
import Section5 from "../components/sections/section5/Section5";


export default function Home() {
  return (
    <div className="container-home">
       <div className="container-hero" id="inicio">
           <div className="container-na">
             <NavBar />
           </div>
        </div>
      <div className="section1">
        <Section1 />
      </div>
      <div className="section2">
        <Especialidades />
      </div>
      <div className="section3">
        <Section3 />
      </div>
      <div className="section4">
        <Section4 />
      </div>
      <div className="container-carousel">
          <Carousel />
      </div >
      <div className="section5">
          <Section5/>
      </div>
      <div className="container-footer">
        <Footer />
      </div>
  
    </div>
  );
}
