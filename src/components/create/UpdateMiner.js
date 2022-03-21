import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'

export const UpdateMiner = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar5></Navbar5>
        <h1 className='crear-titulo'>Actualizar Minero</h1>
        <form className="crear-formulario">
               
            
                <label className='crear-label'>Nombre
                    <input type="" className='crear-input' />
                </label>


                <label className='crear-label'>Precio
                    <input type="" className='crear-input' />
                </label>
                <label className='crear-label'>Hashrate
                    <input type="" className='crear-input' />
                </label>
                <label className='crear-label'>Energia
                    <input type="" className='crear-input' />
                </label>
                <button className='crear-boton'>
                    Actualizar
                </button>

            </form>
    </div>
  )
}
