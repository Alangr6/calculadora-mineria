import React, { useEffect } from 'react'
import { useState } from 'react'
import { ConverterBody } from './ConverterBody';


export const ConverterBtc = () => {

    const [data, setData] = useState([]);
    const [productivity, setProductivity] = useState([]);


    /* useEffect(() => {
        cargarDatos()
      return () => {

        }
    }, []) */


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
   /*  function cargarDatosProductividad() {
        const API_URL = 'http://localhost:8000/api/crypto/device/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse2) => {
                setProductivity(dataResponse2)
                console.log(dataResponse2);
            })
            .catch(console.log()
            )
    }; */

    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/device/read";
        fetch(API_URL, { method: 'GET' })
            .then(response => response.json())
            .then((dataResponse2) => {
                setProductivity(dataResponse2)
                console.log(dataResponse2);
            })

            .catch(console.log()

            )
    }
    console.log(productivity);


    return (

        <div className="input-style">
            <form className="rellenar-style">
                <label className='label-1'>Dinero que quieres invertir
                    <input type="number" className='rellenar-number' placeholder='0' />$
                </label>
                <button type='button' className='boton-calculadora' onClick={handleSubmit}>
                    Calcular
                </button>
                <label className="crear-label">Crypto
                    <select className='crear-select'>
                        <option value="-1">Sin filtro</option>
                        {data.map((crypto) => {
                            return <option value={crypto.id}>{crypto.name}</option>

                        }
                        )}
                    </select>
                </label>
               
                        {/* <div>{JSON.stringify(productivity)}</div> */}


            </form>

            

        </div>



    )
}
