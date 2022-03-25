import React, { useEffect, useState } from 'react'

export const DeleteProductivityBody = ({ cryptoDevice }) => {
    console.log(cryptoDevice);
    const {id, crypto, device, benefits } = cryptoDevice
    function borrarDatos() {
        
        const API_URL = 'http://localhost:8000/api/crypto/device/delete/'
        const options = { method: "DELETE" };
        fetch(API_URL + id, options)
            .then(response => response.json())
            .then((dataResponse) => {

                console.log(dataResponse)
                this.cargarDatos()
            })

            .catch(console.log()

            )
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()

        return () => {

        }
    }, [])
    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/device/read';

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
