import React, {  useEffect, useState } from "react";
import { DeleteDeviceBody } from "./DeleteDeviceBody";



export const DeleteDeviceConstructor = () => {

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
        return <div className="log-field">Tienes que Iniciar sesion para ver este campo</div>
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
                        <DeleteDeviceBody devices={devices}></DeleteDeviceBody>

                    ))}
            </div>

        )
    }



}