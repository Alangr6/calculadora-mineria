import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'

export const UpdateCoin = () => {

    


    return (
        <div>
            <Navbar3></Navbar3>
            <Navbar4></Navbar4>
            <h1 className='crear-titulo'>Actualizar Moneda</h1>
            <form className="crear-formulario">
                <label className='crear-label'>Id
                    <input type="" className='crear-input'  />
                </label>

                <label className='crear-label'>Nombre
                    <input type="" className='crear-input'  />
                </label>
                <label className='crear-label'>Precio
                    <input type="" className='crear-input'  />
                </label>
                <label className='crear-label'>Fecha de creacion
                    <input type="" className='crear-input' placeholder='Y-m-d'  />
                </label>
            
                <button className='crear-boton'>
                    Actualizar
                </button>
            </form>
        </div>
    )
}
