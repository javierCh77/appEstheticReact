import React from "react";
import "./main.css";
// import structure for web
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="container-hero">
      <div>
        <NavBar />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}
