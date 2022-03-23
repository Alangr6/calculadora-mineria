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
                <div className="">
                    <table className=''>
                        <thead className='borrar-thead'>
                        <tr >
                                <th className='index-borrar'>#</th>
                                <th className=''>Nombre</th>
                                <th className=''>Precio</th>
                                <th className=''>Tipo</th>
                                <th className=''>hashrate</th>
                                <th className=''>consumo</th>
                                <th className=''></th>



                            </tr>
                        </thead>
                        <tbody>
                            
                                {devices.map((device) => (
                                    //console.log(crypt);
                                    //const { name, price, creation_date, algorithm } = crypt;
                                   
                                    < tr key={device.id} className="">
                                       <td className=''>{device.id}</td>
                                        <td className=''>{device.name}</td>
                                        <td className=''>{device.price}</td>
                                        <td className=''>{device.type}</td>
                                        <td className=''>{device.hashrate}</td>
                                        <td className=''>{device.comsumption}</td>
                                        <td>
                                        <Link to={"/"+device.id+'/' }>Editar</Link>
                                        
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