import React from "react";
import "./main.css";
// import structure for web
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Section1 from "../components/sections/section1/Section1";
import Section2 from "../components/sections/section2/Section2";
import SectionBelle from "../components/sections/section4/SectionBelle";
import Section3 from "../components/sections/section3/Section3";
//import Carousel from "./components/carousel/Carousel";

export default function Home() {
  return (
    <div className="container-home">
       <div className="container-hero">
           <div className="container-nav">
             <NavBar />
           </div>
        </div>
      <div className="section1">
        <Section1 />
      </div>
      <div className="section2">
        <Section2 />
      </div>
      <div className="section3">
        <Section3/>
      </div>
      <div className="container-belle">
          <SectionBelle />
      </div>
     {/*  <div className="container-carousel">
          <Carousel />
      </div */}>
      <div className="container-footer">
        <Footer />
      </div>
  
    </div>
  );
}
