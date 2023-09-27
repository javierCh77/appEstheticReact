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
    <nav class="navbar fixed-top ">
       <div className='container-img'>
        <img src={logo3} width="50" alt="" />
       </div>
        <div class="container-link">
           <Link class="link-nav" to={"/inicio"}>Inicio</Link>
           <Link class="link-nav" to={"/turnos"}>Turnos</Link>
           <Link class="link-nav" to={"/productos"}>Productos</Link>
           <Link class="link-nav" to={"/servicios"}>Servicios</Link>
           <Link class="link-nav" to={"/contacto"}>Contacto</Link>
        </div>
        <div className='container-social'>
        <Link ><img src={instagram} alt=""></img></Link>
        <Link ><img src={facebook} alt=""></img></Link>
        <Link ><img src={twitter} alt=""></img></Link>
        </div>
    </nav>
    </div>
   
  );
}