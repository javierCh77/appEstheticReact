import React from 'react'
import './map.css'

export default function Map() {
  return (
    <div>
        <div className="box-title">
         Como llegar?
         </div>
      <div className='container-map' >
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d87496.6856656713!2d-68.2720413492049!3d-54.810915776513006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1696268402155!5m2!1ses-419!2sar"  />
     </div>
     <div className='container-ruth'>
            <div className='col-4 img-ruth'>
                        aqui   
            </div>
            <div className='col-4 text-ruth'>
                <h1>Dra. Ruth Galichini</h1> <hr></hr>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ratione explicabo consectetur pariatur id culpa iusto blanditiis et magni dolorem. Voluptate sed assumenda eligendi nesciunt excepturi praesentium voluptas soluta nostrum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium expedita nemo quisquam enim eos nam itaque nulla delectus, repellat sint, blanditiis soluta vero velit. Repudiandae eius dolore ullam officiis nisi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est sunt ea perspiciatis inventore. Saepe nisi recusandae tempora ipsam quae vero quam cumque ex possimus. Dolorum voluptate ipsam ipsum fuga!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius minus consequuntur doloremque inventore, pariatur, placeat suscipit facilis sint impedit, saepe qui aliquid iusto dolor similique a dolorum eos veritatis!
            </div>
        </div>
    </div>
  )
}
