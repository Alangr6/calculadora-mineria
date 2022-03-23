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
                <div className="">
                    <table className=''>
                        <thead className='borrar-thead'>
                            <tr >
                                <th className='index-borrar'>#</th>
                                <th className=''>Moneda</th>
                                <th className=''>Precio</th>
                                <th className=''>Fecha de creacion</th>
                                <th className=''>Algoritmo</th>
                                <th className=''></th>


                            </tr>
                        </thead>
                        <tbody>
                            
                                {crypto.map((crypt) => (
                                    //console.log(crypt);
                                    //const { name, price, creation_date, algorithm } = crypt;
                                   
                                    < tr key={crypt.id} className="">
                                        <td className=''>{crypt.id}</td>
                                        <td className=''>{crypt.name}</td>
                                        <td className=''>{crypt.price}</td>
                                        <td className=''>{crypt.creation_date}</td>
                                        <td className=''>{crypt.algorithm}</td>
                                        <td>
                                        <button className='borrar-boton' onClick={() => this.borrarDatos(crypt.id)}>Borrar</button>
                                        
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