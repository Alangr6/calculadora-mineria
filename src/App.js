import React, { useEffect, useState } from 'react'
import { Header } from './components/Main/Header'

import { Cambio } from '../src/components/router/Cambio'
import { Footer } from './components/Main/Footer'

export default function App() {



  return (
    <div >

      <Header></Header>
      <Cambio></Cambio>
      <Footer></Footer>



    </div>
  )
}


