import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar6 } from '../router/Navbar6'
import { UpdateProductivityConstructor } from './constructor/UpdateProductivityConstructor'


export const UpdateProductivity = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar6></Navbar6>
        <h1 className='crear-titulo'>Actualizar Productividad</h1>
        <UpdateProductivityConstructor></UpdateProductivityConstructor>
    </div>
  )
}
