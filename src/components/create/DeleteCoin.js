import React, { useEffect, useState } from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'
import DeleteCoinConstructor from './constructor/DeleteCoinConstructor'

export const DeleteCoin = () => {
  const API_URL = 'http://localhost:8000/api/crypto/read'
  

  /* const [crypto, setCrypto] = useState([])
  console.log(crypto);
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setCrypto(data)
        } else {
          alert('no se ha podido cargar')
          console.log(data);
        }
      })
  }, )


  const remove = id => {
    const options = { method: "DELETE" };

    fetch(API_URL + id, options)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
            setCrypto(crypto.filter(crypt => crypt.id !== id))
        } else {
          alert('no se ha podido borrar')
        }
      })
  } */

  return (
    <div>
      <Navbar3></Navbar3>
      <Navbar4></Navbar4>
      <h1 className='crear-titulo'>Borrar Moneda</h1>
      <DeleteCoinConstructor></DeleteCoinConstructor>

    </div>
  )
}
