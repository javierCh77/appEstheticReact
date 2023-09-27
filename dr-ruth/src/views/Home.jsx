import React from 'react'
import './main.css'
// import structure for web
import NavBar from '../components/navbar/NavBar'
import Logo from '../components/logo/Logo'

export default function Home() {
  return (
    <div className='container-hero'>
         <NavBar />  
         <Logo />
    </div>
  )
}
