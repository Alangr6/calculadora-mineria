import React, { Component, useEffect, useState } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";
import { DeleteCoinBody } from "./DeleteCoinBody";


export const DeleteCoinConstructor  = () =>  {

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
                <div>
                                {data.map((crypto) => (
                                    <DeleteCoinBody crypto={crypto}></DeleteCoinBody>
                                ))}
                </div>

            )
        }
    


}