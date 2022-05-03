import React, { useEffect, useState } from 'react'

export const ConverterBody = ({ cryptoProductivity }) => {
    console.log(cryptoProductivity);
    const { id,  benefits, crypto, device } = cryptoProductivity

  
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
              
            </tr>

        </table>




    )

}
