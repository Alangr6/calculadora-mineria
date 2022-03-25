import React, { useEffect, useState } from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar6 } from '../router/Navbar6'
import { DeleteCoinConstructor } from './constructor/DeleteCoinConstructor'
import { DeleteProductivityConstructor } from './constructor/DeleteProductivityConstructor'


export const DeleteProductivity = () => {
  const API_URL = 'http://localhost:8000/api/crypto/read'
  
  return (
    <div>
      <Navbar3></Navbar3>
      <Navbar6></Navbar6>
      <h1 className='crear-titulo'>Borrar Productividad</h1>
      <DeleteProductivityConstructor></DeleteProductivityConstructor>  
    </div>
  )
}
