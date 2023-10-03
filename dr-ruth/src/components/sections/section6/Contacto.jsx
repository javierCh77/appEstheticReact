import React, { useRef } from 'react';
import './contacto.css'

import emailjs from '@emailjs/browser'



export default function Contacto() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sejvh07', 'template_yizev69', form.current, 'PGRabs2nwXtYkuEDq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className='container-contacto' id='turnos' >
        <div className='contacto' >
             <h1>Solicita tu turno</h1>
         </div>
         <div>
              Por favor completa el siguiente formulario con tus datos  y en breve me pondre en contacto. Muchas gracias
         </div>
         
         
        <form  ref={form} onSubmit={sendEmail}  className='container-form d-flex'>
        <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                 <input type="text" name='user_name' className="form-control" id="exampleFormControlInput1" placeholder=" "/>
        </div>
        <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput2" className="form-label">Apellido</label>
                 <input type="text"  className="form-control" id="exampleFormControlInput2" placeholder=""/>
        </div>
        <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                 <input type="email" name='user_email' className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
        </div>
        <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput4" className="form-label">Celular</label>
                 <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="xxxx xx xxxxxx"/>
        </div>
        <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlTextarea5" className="form-label">Mensaje</label>
            <textarea className="form-control" name='message' id="exampleFormControlTextarea5" rows="3"></textarea>
        </div>
        <div className="mb-3 col-4">
        <button type="submit" value="send" className="btn btn-outline-success" >Enviar</button>
        </div>
         </form>
    </div>
  )
}
