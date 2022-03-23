import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";


export default class UpdateCoinConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            crypto: [],

        };
    }
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
        const API_URL = 'http://localhost:8000/api/crypto/read';
        fetch(API_URL)

            .then(response => response.json())
            .then((dataResponse) => {
                JSON.stringify(dataResponse)
                this.setState({ data: true, crypto: dataResponse })
            })

            .catch(console.log()

            )
    };
    componentDidMount() {
        this.cargarDatos()
    }
    

    render() {

        const { data, crypto } = this.state
        if (!data) {
            return <div>Cargando</div>
        } else {
            return (
                <div className="update-body">
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
                            
                                {crypto.map((crypt) => (
                                
                                    < tr key={crypt.id} className="">
                                        <td className='update-index'>{crypt.id}</td>
                                        <td className='update-coin'>{crypt.name}</td>
                                        <td className='update-price'>{crypt.price}</td>
                                        <td className='update-date'>{crypt.creation_date}</td>
                                        <td className='update-algorithm'>{crypt.algorithm}</td>
                                        <td className="edit-button">
                                        <Link to={"/"+crypt.id+'/crypto' }><button className="edit-button2">Editar</button></Link>
                                        
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