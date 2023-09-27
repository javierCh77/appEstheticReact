import React from 'react'
import logo from '../../assets/images/logoRuth.png';
import "./Logo.css";

export default function Logo() {
  return (
    <div className='container-logo'>
      <img src={logo} alt="Dra. Ruth Calichini" />
    </div>
  )
}
