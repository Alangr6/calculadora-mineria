import React, { Component, useEffect, useState } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";
import { UpdateDeviceBody } from "./UpdateDeviceBody";




export const UpdateDeviceConstructor  = () =>  {

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
    
  
        if (!data) {
            return <div>Cargando</div>
        } else {
            console.log(data);
            return (
                <div>
                    
                     {data.map((devices) => (
                        <UpdateDeviceBody devices={devices}></UpdateDeviceBody>
                        
                        ))}
                </div>

            )
        }
    


}