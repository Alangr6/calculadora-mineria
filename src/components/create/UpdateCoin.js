import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'
import { UpdateCoinConstructor } from './constructor/UpdateCoinConstructor'

export const UpdateCoin = () => {

    


    return (
        <div>
            <Navbar3></Navbar3>
            <Navbar4></Navbar4>
            <h1 className='crear-titulo'>Actualizar Moneda</h1>
            <UpdateCoinConstructor></UpdateCoinConstructor>
        </div>
    )
}
