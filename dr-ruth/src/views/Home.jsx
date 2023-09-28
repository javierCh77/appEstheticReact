import React from "react";
import "./main.css";
// import structure for web
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import SectionLogo from "../components/sections/section2/SectionLogo";
import Section1 from "../components/sections/section1/Section1";
import SectionBelle from "../components/sections/section3/SectionBelle";
//import Carousel from "./components/carousel/Carousel";

export default function Home() {
  return (
    <div className="container-hero">
      <div>
        <NavBar />
      </div>
      <div className="container-logo">
        <SectionLogo />
      </div>
      <div className="container-grilla">
        <Section1 />
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
