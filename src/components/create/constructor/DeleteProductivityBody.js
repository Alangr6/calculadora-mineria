import React, { useEffect, useState } from 'react'

export const DeleteProductivityBody = ({ cryptoDevice }) => {
    console.log(cryptoDevice);
    const {id, crypto, device, benefits } = cryptoDevice
    function borrarDatos() {
        
        const API_URL = 'http://localhost:8000/api/crypto/device/delete/'
        fetch(API_URL + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loggedNoteAppUser')}`
            }
            })
    };
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
                      <button className='delete-button' onClick={borrarDatos}>Borrar</button>
                      </td>
        </tr>

    </table>
   
    )
}
