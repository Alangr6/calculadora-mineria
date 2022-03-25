import React from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";
import { Navbar6 } from "../router/Navbar6";


export const AddProductivity = () => {


    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/device/create";
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                crypto_id : window.document.getElementById('crypto_id').value ,
                device_id: window.document.getElementById('device_id').value,
                benefits : window.document.getElementById('benefits').value

            })
        });
    
        e.preventDefault();
    }

    const API_URL = "http://localhost:8000/api/crypto/device/create";
    return (
        
        <div>
               <Navbar3></Navbar3>
               <Navbar6></Navbar6>
               <h1 className='crear-titulo'>Add Productivity</h1>
                <form action={API_URL} method="POST" className="crear-formulario" >
                    
                  
                   
                    <label className="crear-label">Crypto
                        <select id="crypto_id" className='crear-select'>
                            <option value="1">Bitcoin</option>
                            <option value="31"> Ethereum</option>
                        </select>
                    </label>
                    <label className="crear-label">Crypto
                        <select id="device_id" className='crear-select'>
                            <option value="1">minero</option>
                            <option value="31"> minero2</option>
                        </select>
                    </label>
                    <label className='crear-label'>Nombre
                        <input name='name' type="text" className='crear-input' id="name" />
                    </label>
                  
                    <button onClick={handleSubmit} className='crear-boton2' >
                        Crear
                    </button>
    
                </form>
            
        </div>
      )
}
