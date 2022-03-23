import React, { Component, useEffect, useState } from "react";
import { UpdateCoinBody } from "./UpdateCoinBody";


export const UpdateCoinConstructor = () =>  {
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

        if (!data) {
            return <div>Cargando</div>
        } else {
            return (
                <div >
                                {data.map((crypto) => (
                                   <UpdateCoinBody crypto={crypto}></UpdateCoinBody>
                                ))}
                </div>

            )
        }
    


}