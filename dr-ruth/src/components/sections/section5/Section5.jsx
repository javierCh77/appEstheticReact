/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import './section5.css';

export default function Section5() {
    return (
        <div>
             <div className="container-text" >
                 <p className='text'>La belleza comienza en el momento en que decides ser tú misma</p>
             </div>
             <div className='container-map'>
                <div >
                  <h1>Como llegar</h1>
                </div>
                <div >
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d87496.6856656713!2d-68.2720413492049!3d-54.810915776513006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1696268402155!5m2!1ses-419!2sar"  />
                </div>
             </div> 
       </div>
       
       
    );
}