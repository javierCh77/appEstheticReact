import * as React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom'



export default function NavBar() {

  return (
    <div className='container-nav'>
    <nav className="navbar fixed-top ">
       <div className='container-img'>
            aqui el logo
        <img src="../assets/images/logoRuth.png" alt="" />
        
       </div>
        <div className="container-link">
           <Link className="link-nav" to={"/inicio"}>Inicio</Link>
           <Link className="link-nav" to={"/turnos"}>Turnos</Link>
           <Link className="link-nav" to={"/productos"}>Productos</Link>
           <Link className="link-nav" to={"/servicios"}>Servicios</Link>
           <Link className="link-nav" to={"/contacto"}>Contacto</Link>
        </div>
        <div className='container-social'>
            <a href="#"><img src="../../assets/images/twitter.png" alt="" />Twitter</a>
            <a href="#"><img src="" alt="" />Facebook</a>
            <a href="#"><img src="" alt="" />Instagram</a>
        </div>
    </nav>
    </div>
   
  );
}