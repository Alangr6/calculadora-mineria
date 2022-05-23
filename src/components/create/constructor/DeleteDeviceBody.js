import React, { useEffect, useState } from 'react'

export const DeleteDeviceBody = ({ devices }) => {
    console.log(devices);
    const { id, name, price, type, hashrate, comsumption } = devices

    function borrarDatos() {

        const API_URL = 'http://localhost:8000/api/device/delete/'
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
                    <button className='delete-button' onClick={borrarDatos}>Borrar</button>
                </td>
            </tr>

        </table>




    )
}
