import React from "react";
import "./footer.css";

import instagramIco from '../../assets/icon/instagramIco.svg'
import facebookIco from '../../assets/icon/facebookIco.svg'
import twitterIco from '../../assets/icon/twitterIco.svg'




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
              <div className="container-icon">
                 <a className="icon" href="https://www.facebook.com/" target="blank"><img  src={facebookIco} alt="" /></a>
                 <a className="icon" href="https://www.instagram.com/" target="blank"><img src={instagramIco}alt="" /></a>
                 <a className="icon" href="https://www.twitter.com/" target="blank"><img src={twitterIco}alt="" /></a>
             </div>
        </div>
      </div>
      <div className="footer-section2">Power by JD</div>
    </div>
  );
}
