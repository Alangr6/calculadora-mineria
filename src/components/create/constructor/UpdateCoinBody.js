import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const UpdateCoinBody = ({ crypto }) => {
    console.log(crypto);
    const { id, name, price, creation_date, algorithm } = crypto


    const [data, setData] = useState([]);

    useEffect(() => {
        cargarDatos()

        return () => {

        }
    }, [])
    function cargarDatos() {
        const API_URL = 'http://localhost:8000/api/crypto/read';
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
                <tr key={id} className="">
                    <td className='update-index-coin'>{id}</td>
                    <td className='update-coin-coin'>{name}</td>
                    <td className='update-price'>{price}</td>
                    <td className='update-price'>{creation_date.date}</td>
                    <td className='update-algorithm-coin'>{algorithm}</td>
                    <td className="edit-button">
                        <Link to={"/" + id + '/crypto'}><button className="edit-button2">Editar</button></Link>
                    </td>
                </tr>
            </table>

    )
}
