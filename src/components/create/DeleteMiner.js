import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'

export const DeleteMiner = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar5></Navbar5>
        <h1 className='crear-titulo'>Borrar Minero</h1>
        <form className="crear-formulario">
                <label className='crear-label'>Id
                    <input type="" className='crear-input'  />
                </label>
                <button className='crear-boton3'>
                    Borrar
                </button>
            </form>
    </div>
  )
}
