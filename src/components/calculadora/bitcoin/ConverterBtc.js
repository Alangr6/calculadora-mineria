import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


export const ConverterBtc = () => {

    const [data, setData] = useState([]);
    const [productivity, setProductivity] = useState([]);



    useEffect(() => {
        cargarDatos()
        cargarDatosProductividad()
        handleSubmit()
        return () => {

        }
    }, [])




    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse) => {
                setData(dataResponse.data)
            })

            .catch(console.log()

            )
    };
    function cargarDatosProductividad() {
        const API_URL = 'http://localhost:8000/api/crypto/device/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse2) => {
                setProductivity(dataResponse2.data)
            })
            .catch(console.log()
            )
    };

    function handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/device/read";
        fetch(API_URL, { method: 'GET' })
            .then(response => response.json())
            .then((dataResponse2) => {
                setProductivity(dataResponse2.data)
            })


        return <div className='productivity'>{productivity.map((productivity) => {
            <div className='productivity-1'>{productivity.device.name} | produce: {productivity.benefits} {productivity.crypto.name} | PRECIO:{productivity.device.price}</div>
        })}</div>
    }

    console.log(handleSubmit);

    return (

        <div className="">
            <form className="input-style">
                <div className="calculator-interface">
                    <div className="rellenar-boton">
                        <label className='label-1'>Dinero que quieres invertir
                            <input type="number" className='rellenar-number' placeholder='0' />$
                        </label>
                        <button type='button' className='boton-calculadora' onClick={handleSubmit}>
                            Calcular
                        </button>

                    </div>
                    <label className="crypto-select">Cripto
                        <select className='crear-select'>
                            <option value="-1">Sin filtro</option>
                            {data.map((crypto) => {
                                return <option key={crypto.id} value={crypto.id}>{crypto.name}</option>

                            }
                            )}
                        </select>
                    </label>
                </div>


            </form>
            <div className='productivity'>{productivity.map((productivity) => {
                return <div className='productivity-1'>{productivity.device.name} | produce: {productivity.benefits} {productivity.crypto.name} | PRECIO:{productivity.device.price}</div>
            })}</div>

        </div>



    )
}
