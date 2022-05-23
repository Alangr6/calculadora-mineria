import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const UpdateProductivityBody = ({ cryptoDevice }) => {
    console.log(cryptoDevice);
    const { id,  benefits, crypto, device } = cryptoDevice
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
    return (
        <table className='update-table'>
            < tr key={id} className="">
                <td className='update-coin-coin'>{crypto.name}</td>
                <td className='update-price'>{device.name}</td>
                <td className='update-date'>{benefits}</td>
                <td className="edit-button">
                    <Link to={"/" + id + '/crypto/device'}><button className="edit-button2">Editar</button></Link>
                </td>
            </tr>

        </table>
      
    )
}
