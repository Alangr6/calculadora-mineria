import React from 'react'
import { Navbar3 } from '../router/Navbar3'
import { Navbar5 } from '../router/Navbar5'

export const AddDevice = () => {
    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/device/create";
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                type : window.document.getElementById('type').value,
                name : window.document.getElementById('name').value ,
                price : window.document.getElementById('price').value,
                comsumption :window.document.getElementById('comsumption').value,
                hashrate : window.document.getElementById('hashrate').value

            })
        });
    
        e.preventDefault();
    }

    const API_URL = "http://localhost:8000/api/device/create";
    return (

        <div>
            <Navbar3></Navbar3>
            <Navbar5></Navbar5>
            <h1 className='crear-titulo'>Add Minero</h1>
            <form action={API_URL} className="crear-formulario">
               
                <label className='crear-label'>Nombre
                    <input type="text" className='crear-input' id='name'/>
                </label>
                <label className='crear-label'>Precio
                    <input type="number" className='crear-input' id='price' />
                </label>
                <label className="crear-label" >Tipo
                    <select id='type' className='crear-select'>
                        <option value="ASIC">ASIC</option>
                        <option value="GPU"> GPU</option>
                    </select>
                </label>
                <label className='crear-label' >Hashrate
                    <input type="number" id='hashrate' className='crear-input' />
                </label>
                <label className='crear-label' >Energia
                    <input type="number" id='comsumption' className='crear-input' />
                </label>
                <button onClick={handleSubmit} className='crear-boton2'>
                    Crear
                </button>

            </form>


        </div>
    )
}
