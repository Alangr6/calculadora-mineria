import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";


export default class UpdateDeviceConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            devices: [],

        };
    }
    actualizarDatos = (id) => {
        console.log(id);
        const API_URL = 'http://localhost:8000/api/device/update'
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
        //const API_URL = 'https://jsonplaceholder.typicode.com/users';
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
        const API_URL = 'http://localhost:8000/api/device/update/'
        if (!data) {
            return <div>Cargando</div>
        } else {
            return (
                <div className="update-body">
                    <table className='update-table'>
                        <thead className=''>
                        <tr >
                                <th className='update-index-device'>#</th>
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
                                    //console.log(crypt);
                                    //const { name, price, creation_date, algorithm } = crypt;
                                   
                                    < tr key={device.id} className="">
                                       <td className='update-index-device'>{device.id}</td>
                                        <td className='update-coin'>{device.name}</td>
                                        <td className='update-price'>{device.price}</td>
                                        <td className='update-date'>{device.type}</td>
                                        <td className='update-algorithm'>{device.hashrate}</td>
                                        <td className='edit-button'>{device.comsumption}</td>
                                        <td className="edit-button">
                                        <Link to={"/"+device.id+'/device' }><button className="edit-button2">Editar</button></Link>
                                        
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