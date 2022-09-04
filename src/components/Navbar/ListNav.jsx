import React from 'react'
import './listNav.css'

function ListNav() {
  return (
    <div className='container'>
      <ul>
        <li className='title'>¡Oh, lá lá!</li>
      </ul>
      <ul className='inactive'>
        <li>Inicio</li>
        <li>Contacto</li>
        <li>Agendar cita</li>
      </ul>
    </div>
  )
}

export {ListNav}