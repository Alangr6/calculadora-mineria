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

     
                <table className='update-table'>
                    < tr key={id} className="">
                    <td className='update-index-coin'>{id}</td>
                    <td className='update-coin-coin'>{name}</td>
                    <td className='update-price'>{price}</td>
                    <td className='update-date'>{creation_date.date}</td>
                    <td className='update-algorithm-coin'>{algorithm}</td>
                    <td className="edit-button">
                            <button className='delete-button' onClick={borrarDatos}>Borrar</button>
                            </td>
                            </tr>

                        </table>

                    


    )
}
