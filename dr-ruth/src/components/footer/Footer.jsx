import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-section1">
        <div className="mt-4">
          <h4>Contacto</h4>
          <ul>item 1</ul>
          <ul>item 2</ul>
          <ul>item 3</ul>
        </div>
        <div className="mt-4">
          <h4>Informacion</h4>
          <ul>item 1</ul>
          <ul>item 2</ul>
          <ul>item 3</ul>
        </div>
        <div className="mt-4">
          <h4>Seguinos</h4>
          <ul>item 1</ul>
          <ul>item 2</ul>
          <ul>item 3</ul>
        </div>
      </div>
      <div className="footer-section2">Power by JD</div>
    </div>
  );
}
