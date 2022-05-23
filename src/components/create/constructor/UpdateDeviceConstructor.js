import React, { Component, useEffect, useState } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";
import { UpdateDeviceBody } from "./UpdateDeviceBody";




export const UpdateDeviceConstructor = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()
        return () => {
        }
    }, [])

    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/device/read';
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
        console.log(data);
        return (
            <div className="update-body">
                <table className='update-table'>

                    <thead className=''>
                        <tr >
                            <th className='update-index'>#</th>
                            <th className='update-coin'>Moneda</th>
                            <th className='update-price'>Precio</th>
                            <th className='update-date'>Tipo</th>
                            <th className='update-algorithm'>hashrate</th>
                            <th className='update-algorithm'>consumo</th>

                            <th className='edit-button'></th>


                        </tr>
                    </thead>
                    </table>

                    {data.map((devices) => (
                        <UpdateDeviceBody devices={devices}></UpdateDeviceBody>

                    ))}

            </div>

        )
    }



}