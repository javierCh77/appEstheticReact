import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
      <nav class="navbar container-nav">
         <div class="container">
            <div className='col-6'>
                aqui el logo
            </div>
           <Link class="navbar-brand text-white" to={"/inicio"}>Inicio</Link>
           <Link class="navbar-brand text-white" to={"/turnos"}>Turnos</Link>
           <Link class="navbar-brand text-white" to={"/productos"}>Productos</Link>
           <Link class="navbar-brand text-white" to={"/servicios"}>Servicios</Link>
           <Link class="navbar-brand text-white" to={"/contacto"}>Contacto</Link>
         </div>
      </nav>
  )
}
