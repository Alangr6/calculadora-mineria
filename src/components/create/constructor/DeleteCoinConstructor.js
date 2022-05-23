import React, { Component, useEffect, useState } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";
import { DeleteCoinBody } from "./DeleteCoinBody";


export const DeleteCoinConstructor = () => {

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

console.log(data);
    if (!data) {
        return <div>Cargando</div>
    } else {
        return (


            <div className='update-body'>
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
                        <DeleteCoinBody crypto={crypto}></DeleteCoinBody>
                    ))}


            </div>

        )
    }



}