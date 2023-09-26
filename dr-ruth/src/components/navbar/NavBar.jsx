import * as React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom'



export default function NavBar() {

  return (
    <div className='container-nav'>
    <nav class="navbar fixed-top ">
       <div className='container-img'>
            aqui el logo
        <img src="" alt="" />
       </div>
        <div class="container-link">
           <Link class="link-nav" to={"/inicio"}>Inicio</Link>
           <Link class="link-nav" to={"/turnos"}>Turnos</Link>
           <Link class="link-nav" to={"/productos"}>Productos</Link>
           <Link class="link-nav" to={"/servicios"}>Servicios</Link>
           <Link class="link-nav" to={"/contacto"}>Contacto</Link>
        </div>
        <div className='container-social'>
            redes
        </div>
    </nav>
    </div>
   
  );
}