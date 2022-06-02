import React from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";


export const AddCoin = () => {


    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/create";
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
            },
            body: JSON.stringify({
                name : window.document.getElementById('name').value ,
                price : window.document.getElementById('price').value,
                creation_date :window.document.getElementById('creation_date').value,
                algorithm : window.document.getElementById('algorithm').value

            })
        });
    
        e.preventDefault();
    }

    const API_URL = "http://localhost:8000/api/crypto/create";
    return (
        
        <div>
               <Navbar3></Navbar3>
               <Navbar4></Navbar4>
               <h1 className='crear-titulo'>Añadir Moneda</h1>
                <form action={API_URL} method="POST" className="crear-formulario" >
                    <label className='crear-label'>Nombre
                        <input name='name' type="text" className='crear-input' id="name" />
                    </label>
                  
                    <label className='crear-label'>Precio
                        <input name='price' type="number" className='crear-input' id="price" />
                    </label>
                    <label className='crear-label'>Fecha de creacion
                        <input name='creation_date' type="date" className='crear-input' id="creation_date" />
                    </label>
                    <label className="crear-label">Algoritmo
                        <select id="algorithm" className='crear-select'>
                            <option value="SHA-256">SHA-256</option>
                            <option value="Ethash"> Ethash</option>
                        </select>
                    </label>
                  
                    <button onClick={handleSubmit} className='crear-boton2' >
                        Crear
                    </button>
    
                </form>
            
        </div>
      )
}
