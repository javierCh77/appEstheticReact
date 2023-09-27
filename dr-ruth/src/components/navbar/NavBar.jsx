import * as React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom'
//import logos
import logo3 from '../../assets/icon/logo3.png'
import instagram from '../../assets/icon/instagram.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'

export default function NavBar() {

  return (
    <div className='container-nav'>
    <nav className="navbar fixed-top ">
       <div className='container-img'>
            aqui el logo
        <img src="" alt="" />
       </div>
        <div className="container-link">
           <Link className="link-nav" to={"/inicio"}>Inicio</Link>
           <Link className="link-nav" to={"/turnos"}>Turnos</Link>
           <Link className="link-nav" to={"/productos"}>Productos</Link>
           <Link className="link-nav" to={"/servicios"}>Servicios</Link>
           <Link className="link-nav" to={"/contacto"}>Contacto</Link>
        </div>
        <div className='container-social'>
            redes
        </div>
    </nav>
    </div>
   
  );
}