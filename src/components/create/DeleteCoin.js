import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'

export const DeleteCoin = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar4></Navbar4>
        <h1 className='crear-titulo'>Borrar Moneda</h1>

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
