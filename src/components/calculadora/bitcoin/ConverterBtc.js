import React, { useEffect } from 'react'
import { useState } from 'react'


export const ConverterBtc = ({ }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()

        return () => {

        }
    }, [])
    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse) => {
                setData(dataResponse.data)
                console.log(dataResponse);
            })

            .catch(console.log()

            )
    };
    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/device/read";
        fetch(API_URL,{method: 'GET',})
            .then()
    }


    return (

        <div className="input-style">
            <form   className="rellenar-style">
                <label className='label-1'>Dinero que quieres invertir
                    <input type="number" className='rellenar-number' placeholder='0' />$
                </label>
                <button type='button' className='boton-calculadora' onClick={handleSubmit}>
                    Calcular
                </button>
                <label className="crear-label">Crypto
                    <select  className='crear-select'>
                        <option value="-1">Sin filtro</option>
                        {data.map((crypto) => {
                            return <option value={crypto.id}>{crypto.name}</option>
                            
                        }
                        )}
                    </select>
                </label>


            </form>


        </div>



    )
}
