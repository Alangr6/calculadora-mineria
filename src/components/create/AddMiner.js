import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'

export const AddMiner = () => {
    return (

        <div>
            <Navbar3></Navbar3>
            <Navbar5></Navbar5>
            <h1 className='crear-titulo'>Add Minero</h1>
            <form className="crear-formulario">
               
                <label className='crear-label'>Nombre
                    <input type="" className='crear-input' />
                </label>


                <label className='crear-label'>Precio
                    <input type="" className='crear-input' />
                </label>
                <label className="crear-label">Tipo
                    <select className='crear-select'>

                        <option value="1">ASIC</option>
                        <option value="2"> GPU</option>

                    </select>
                </label>
                <label className="crear-label">Algoritmo
                    <select className='crear-select'>

                        <option value="1">SHA-256</option>
                        <option value="2"> Ethash</option>

                    </select>
                </label>
                <label className='crear-label'>Hashrate
                    <input type="" className='crear-input' />
                </label>
                <label className='crear-label'>Energia
                    <input type="" className='crear-input' />
                </label>
                <button className='crear-boton2'>
                    Crear
                </button>

            </form>


        </div>
    )
}
