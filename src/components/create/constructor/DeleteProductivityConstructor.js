import React, { Component, useEffect, useState } from "react";
import { DeleteProductivityBody } from "./DeleteProductivityBody";


export const DeleteProductivityConstructor = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()
        return () => {
        }
    }, [])

    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/device/read';
        const token = {headers: {
            'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
        }}
        fetch(API_URL,token)
            .then(request => request.json())
            .then((dataResponse) => {
                setData(dataResponse.data)
                console.log(dataResponse);
            })
            .catch(console.log()
            )
    };


    if (!data) {
        return <div className="log-field">Tienes que Iniciar sesion para ver este campo</div>
    } else {
        return (
            <div className='update-body'>
            <table className='update-table'>
                <thead className=''>
                    <tr >
                        <th className='update-coin-coin'>Moneda</th>
                        <th className='update-price'>Minero</th>
                        <th className='update-date'>Beneficio</th>
                        <th className='edit-button'></th>
                    </tr>
                </thead>
            </table>
            {data.map((cryptoDevice) => (
                <DeleteProductivityBody key={cryptoDevice.id} cryptoDevice={cryptoDevice}></DeleteProductivityBody>
            ))}
        </div>

        )
    }



}