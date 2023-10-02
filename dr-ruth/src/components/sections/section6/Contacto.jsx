import React from 'react'
import './contacto.css'

export default function Contacto() {
  return (
    <div className='container-contacto' id='turnos'>
        <div className='contacto' >
             <h1>Solicita tu turno</h1>
         </div>
         <div>
              Por favor completa el siguiente formulario con tus datos  y en breve me pondre en contacto. Muchas gracias
         </div>
        <div className='container-form d-flex'>
        <div class="mb-3 col-4">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" "/>
        </div>
        <div class="mb-3 col-4">
            <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
        </div>
        <div class="mb-3 col-4">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3 col-4">
            <label for="exampleFormControlInput1" class="form-label">Celular</label>
                 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="xxxx xx xxxxxx"/>
        </div>
        <div class="mb-3 col-4">
            <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3 col-4">
        <button type="button" class="btn btn-outline-success">Enviar</button>
        </div>
         </div>
    </div>
  )
}
