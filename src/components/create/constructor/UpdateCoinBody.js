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
                        <td className='update-index'>{id}</td>
                        <td className='update-coin'>{name}</td>
                        <td className='update-price'>{price}</td>
                        <td className='update-date'>{creation_date.date}</td>
                        <td className='update-algorithm'>{algorithm}</td>
                        <td className="edit-button">
                             <Link to={"/"+id+'/crypto' }><button className="edit-button2">Editar</button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
