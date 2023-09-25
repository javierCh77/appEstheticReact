import React from "react";
import c1 from "../../assets/carousel/c1.jpg";
import c2 from "../../assets/carousel/c2.jpg";
import c3 from "../../assets/carousel/c3.jpg";
import "./carousel.css";

export default function Carousel() {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark"  data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark"  data-bs-slide-to="1" aria-label="Slide 2" ></button>
        <button type="button" data-bs-target="#carouselExampleDark"   data-bs-slide-to="2" aria-label="Slide 3" ></button>
      </div>
      <div class="container-test">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={c1} className="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>primero</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src={c2} className="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Segundo</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <img src={c3} className="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Tercero</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next"  type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
