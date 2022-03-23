import React, { useEffect, useState } from 'react'

export const DeleteCoinBody = ({ crypto }) => {
    console.log(crypto);
    const { id, name, price, creation_date, algorithm } = crypto
    function borrarDatos() {
        
        const API_URL = 'http://localhost:8000/api/crypto/delete/'
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
        const API_URL = 'http://localhost:8000/api/crypto/read';

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
                        <th className='update-date'>Fecha de creacion</th>
                        <th className='update-algorithm'>Algoritmo</th>
                        <th className='edit-button'></th>


                    </tr>
                </thead>
                <tbody>
                    < tr key={id} className="">
                        <td className='update-coin'>{id}</td>
                        <td className='update-price'>{name}</td>
                        <td className='update-date'>{price}</td>
                        <td className='update-algorithm'>{creation_date.date}</td>
                        <td className='edit-button'>{algorithm}</td>
                        <td className="edit-button">
                            <button className='delete-button' onClick={borrarDatos}>Borrar</button>
                            </td>
                            </tr>

                        </tbody>

                    

            </table>

        </div>
    )
}
