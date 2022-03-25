import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const UpdateDeviceBody = ({ devices }) => {
    console.log(devices);
    const { id, name, price, type, hashrate, comsumption } = devices



    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()

        return () => {

        }
    }, [])
    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/device/read';

        fetch(API_URL)
            .then(request => request.json())
            .then((dataResponse) => {
                setData(dataResponse.data)
                console.log(dataResponse);
            })
            .catch(console.log()

            )
    };
    return (

            
            <table className='update-table'>
                < tr key={id} className="">
                    <td className='update-index'>{id}</td>
                    <td className='update-coin'>{name}</td>
                    <td className='update-price'>{price}</td>
                    <td className='update-algorithm'>{type}</td>
                    <td className='update-algorithm'>{hashrate}</td>
                    <td className='update-algorithm'>{comsumption}</td>
                    <td className="edit-button">
                        <Link to={"/" + id + '/device'}><button className="edit-button2">Editar</button></Link>
                    </td>
                </tr>

            </table>
    )
}
