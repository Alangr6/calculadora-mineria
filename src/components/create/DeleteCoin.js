import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'
import { DeleteCoinConstructor } from './constructor/DeleteCoinConstructor'


export const DeleteCoin = () => {
  const API_URL = 'http://localhost:8000/api/crypto/read'
  
  return (
    <div>
      <Navbar3></Navbar3>
      <Navbar4></Navbar4>
      <h1 className='crear-titulo'>Borrar Moneda</h1>
      <DeleteCoinConstructor></DeleteCoinConstructor>

    </div>
  )
}
