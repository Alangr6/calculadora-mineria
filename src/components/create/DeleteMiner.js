import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'
import DeleteDeviceConstructor from './constructor/DeleteDeviceConstructor'

export const DeleteMiner = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar5></Navbar5>
        <h1 className='crear-titulo'>Borrar Minero</h1>
        <DeleteDeviceConstructor></DeleteDeviceConstructor>
    </div>
  )
}
