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

        <div className='update-body'>
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
                <tbody>
                    < tr key={id} className="">
                        <td className='update-coin'>{id}</td>
                        <td className='update-price'>{name}</td>
                        <td className='update-date'>{price}</td>
                        <td className='update-algorithm'>{type}</td>
                        <td className='edit-button'>{hashrate}</td>
                        <td className='edit-button'>{comsumption}</td>
                        <td className="edit-button">
                            <button className='delete-button' onClick={borrarDatos}>Borrar</button>
                            </td>
                            </tr>

                        </tbody>

                    

            </table>

        </div>
    )
}
