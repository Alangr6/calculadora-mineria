import React, { Component } from "react";
import { Navbar3 } from "../../router/Navbar3";
import { Navbar4 } from "../../router/Navbar4";
import { UpdateCoinButton } from "../UpdateCoinButton";


export default class DeleteCoinConstructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            crypto: [],

        };
    }
    borrarDatos = (id) => {
        console.log(id);
        const API_URL = 'http://localhost:8000/api/crypto/delete/'
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
        const API_URL = 'http://localhost:8000/api/crypto/read';
        //const API_URL = 'https://jsonplaceholder.typicode.com/users';
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
                                <th className='update-coin'>Moneda</th>
                                <th className='update-price'>Precio</th>
                                <th className='update-date'>Fecha de creacion</th>
                                <th className='update-algorithm'>Algoritmo</th>
                                <th className='edit-button'></th>


                            </tr>
                        </thead>
                        <tbody>
                            
                                {crypto.map((crypt) => (
                                    //console.log(crypt);
                                    //const { name, price, creation_date, algorithm } = crypt;
                                   
                                    < tr key={crypt.id} className="">
                                        <td className='update-coin'>{crypt.id}</td>
                                        <td className='update-price'>{crypt.name}</td>
                                        <td className='update-date'>{crypt.price}</td>
                                        <td className='update-algorithm'>{crypt.creation_date}</td>
                                        <td className='edit-button'>{crypt.algorithm}</td>
                                        <td className="edit-button">
                                        <button className='delete-button' onClick={() => this.borrarDatos(crypt.id)}>Borrar</button>
                                        
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