import React, { Component } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";


export default class DeleteDeviceConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            devices: [],

        };
    }
    borrarDatos = (id) => {
        console.log(id);
        const API_URL = 'http://localhost:8000/api/device/delete/'
        const options = { method: "DELETE" };
        fetch(API_URL+id, options)
            .then(response => response.json())
            .then((dataResponse) => {

                console.log(dataResponse)
                this.cargarDatos()
            })

            .catch(console.log()

            )
    };
    actualizarDatos = (id) => {
        console.log(id);
        const API_URL = 'http://localhost:8000/api/crypto/update/'
        const options = { method: "PUT" };
        fetch(API_URL+id, options)
            .then(response => response.json())
            .then((dataResponse) => {

                console.log(dataResponse)
                this.cargarDatos()
            })

            .catch(console.log()

            )
    };

    cargarDatos() {
        const API_URL = 'http://localhost:8000/api/device/read';
        fetch(API_URL)

            .then(response => response.json())
            .then((dataResponse) => {
                JSON.stringify(dataResponse)
                this.setState({ data: true, devices: dataResponse })
            })

            .catch(console.log()

            )
    };
    componentDidMount() {
        this.cargarDatos()
    }
    

    render() {

        const { data, devices } = this.state
        const API_URL = 'http://localhost:8000/api/crypto/delete/{id}'
        if (!data) {
            return <div>Cargando</div>
        } else {
            return (
                <div className="update-body">
                    <table className='update-table'>
                        <thead className=''>
                            <tr >
                                <th className='update-index'>#</th>
                                <th className='update-coin'>Nombre</th>
                                <th className='update-price'>Precio</th>
                                <th className='update-date'>Tipo</th>
                                <th className='update-algorithm'>hashrate</th>
                                <th className='edit-button'>consumo</th>
                                <th className='edit-button'></th>



                            </tr>
                        </thead>
                        <tbody>
                            
                                {devices.map((device) => (
                                    //console.log(device);
                                    //const { name, price, creation_date, algorithm } = device;
                                   
                                    < tr key={device.id} >
                                        <td className='update-coin'>{device.id}</td>
                                        <td className='update-price'>{device.name}</td>
                                        <td className='update-date'>{device.price}</td>
                                        <td className='update-algorithm'>{device.type}</td>
                                        <td className='edit-button'>{device.hashrate}</td>
                                        <td className='edit-button'>{device.comsumption}</td>
                                        <td>
                                        <button className='delete-button' onClick={() => this.borrarDatos(device.id)}>Borrar</button>
                                        
                                        </td>
                                    
                                    </tr>

                                ))}
                        </tbody>

                    </table>


                </div>

            )
        }
    }


}