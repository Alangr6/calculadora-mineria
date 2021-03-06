import React, { useEffect, useState } from 'react'

export const DeleteCoinBody = ({ crypto }) => {
    console.log(crypto);
    const { id, name, price, creation_date, algorithm } = crypto
    
    function borrarDatos() {
        
        const API_URL = 'http://localhost:8000/api/crypto/delete/'
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
