import React from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";


export const AddCoin = () => {
    document.addEventListener("DOMContentLoaded", function(e) {

        let miForm = document.getElementById('miForm');
        miForm.onsubmit = function(e) {
         
          let formData = new FormData(this);
          let jsonData = {};
          for (let [k, v] of formData) {
            jsonData[k] = v;
          }
          console.log(jsonData);
        }
      
      });
    const API_URL = "http://localhost:8000/api/crypto/create";
    return (
        
        <div>
               <Navbar3></Navbar3>
               <Navbar4></Navbar4>
               <h1 className='crear-titulo'>Add Moneda</h1>
                <form action={API_URL} method="POST" className="crear-formulario" id="miForm"  >
                    <label className='crear-label'>Nombre
                        <input name='name' type="text" className='crear-input' />
                    </label>
                  
                    <label className='crear-label'>Precio
                        <input name='price' type="number" className='crear-input'  />
                    </label>
                    <label className='crear-label'>Fecha de creacion
                        <input name='creation_date' type="date" className='crear-input' />
                    </label>
                    <label className="crear-label">Algoritmo
                    <input name='algorithm' type="text" className='crear-input' />
    
                       {/*  <select  className='crear-select'>
    
                            <option value="1">SHA-256</option>
                            <option value="2"> Ethash</option>
    
                        </select> */}
                    </label>
                  
                    <button className='crear-boton2' >
                        Crear
                    </button>
    
                </form>
            
        </div>
      )
}
