import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'
import UpdateDeviceConstructor from './constructor/UpdateDeviceConstructor'

export const UpdateMiner = () => {
  return (
    <div>
        <Navbar3></Navbar3>
        <Navbar5></Navbar5>
        <h1 className='crear-titulo'>Actualizar Minero</h1>
        <UpdateDeviceConstructor></UpdateDeviceConstructor>
    </div>
  )
}
