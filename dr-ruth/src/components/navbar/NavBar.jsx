import * as React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom'
//import logos
import instagram from '../../assets/icon/instagram.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'

export default function NavBar() {

  return (
    <div className='container'>
     <nav class="fixed-top  container-nav">
        <div class="container-link">
           <Link class="link-nav" to={"/inicio"}>Inicio</Link>
           <Link class="link-nav" to={"/inicio"}>Nosotros</Link>
           <Link class="link-nav" to={"/turnos"}>Turnos</Link>
           <Link class="link-nav" to={"/productos"}>Productos</Link>
           <Link class="link-nav" to={"/servicios"}>Servicios</Link>
           <Link class="link-nav" to={"/contacto"}>Contacto</Link>
           
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