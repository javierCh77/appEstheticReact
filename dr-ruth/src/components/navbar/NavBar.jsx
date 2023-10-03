import * as React from 'react';
import './navBar.css'
//import { Link } from 'react-router-dom'
//import logos
//import instagram from '../../assets/icon/instagram.svg'
//import facebook from '../../assets/icon/facebook.svg'
//import twitter from '../../assets/icon/twitter.svg'

export default function NavBar() {

  return (
    <div className='container'>
     <nav className="fixed-top  container-nav">
        <div className="container-link">
           <a className="link-nav" href={"#inicio"}>Inicio</a>
           <a className="link-nav" href={"#servicios"}>Especiliades</a>
           <a className="link-nav" href="#nosotro">Nosotros</a>
           <a className="link-nav" href={"#galeria"}>Galeria</a>
           <a className="link-nav" href={"#turnos"}>Turnos</a> 
           <a className="link-nav" href={"#contacto"}>Contacto</a>
        </div> 
    </nav>
    </div>
  );
}


// <div className='container-social'>
//<Link ><img src={facebook} alt=""></img></Link>
//<Link ><img src={instagram} alt=""></img></Link>
//<Link ><img src={twitter} alt=""></img></Link>
//</div>