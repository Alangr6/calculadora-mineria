import React, { Component, useEffect, useState } from "react";
import { UpdateCoinBody } from "./UpdateCoinBody";


export const UpdateCoinConstructor = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()

        return () => {

        }
    }, [])

    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/read';
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
        return <div>Cargando</div>
    } else {
        return (
            <div className="update-body">
                <table className='update-table'>

                    <thead className=''>
                        <tr>
                            <th className='update-index-coin'>#</th>
                            <th className='update-coin-coin'>Moneda</th>
                            <th className='update-price'>Precio</th>
                            <th className='update-date'>Fecha de creacion</th>
                            <th className='update-algorithm-coin'>Algoritmo</th>
                            <th className='edit-button'></th>
                        </tr>
                    </thead>
                    </table>
                    {data.map((crypto) => (
                        <UpdateCoinBody crypto={crypto}></UpdateCoinBody>
                    ))}
                

            </div>

        )
    }



}