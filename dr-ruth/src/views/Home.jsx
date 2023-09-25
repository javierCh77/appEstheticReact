import React from 'react'
import './main.css'
// import structure for web
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import Carousel from '../components/carousel/Carousel'



export default function Home() {
  return (
    <div>
      <NavBar />
            <div className='container-hero'>
                    <Carousel />
            </div>
            
       <Footer />
    </div>
  )
}
