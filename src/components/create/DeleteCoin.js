import React, { useEffect, useState } from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar4 } from '../router/Navbar4'

export const DeleteCoin = () => {
  const API_URL = 'http://localhost:8000/api/crypto/read'

  const [crypto, setCrypto] = useState('')

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        if(data.ok){
          setCrypto(data)
        } else{
          alert('no se ha podido cargar')
     console.log(data);   }
    })
  }, [])

  const remove = id => {
    const options = { method: "DELETE" };

    fetch(API_URL + id, options)
      .then(response => response.json())
      .then(result => {
        if (result.ok) {

        } else {
          alert('no se ha podido borrar')
        }
      })
  }

  return (
    <div>
      <Navbar3></Navbar3>
      <Navbar4></Navbar4>
      <h1 className='crear-titulo'>Borrar Moneda</h1>
      <ul>

      </ul>

      <form className="crear-formulario">
        <label className='crear-label'>Id
          <input type="" className='crear-input' />
        </label>
        <button className='crear-boton3'>
          Borrar
        </button>
      </form>
    </div>
  )
}
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  277  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  278  sudo apt-get update