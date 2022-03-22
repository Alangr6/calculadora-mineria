import React, { Component } from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";


export default class Constructor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            crypto: [],

        };
    }
    borrarDatos = (id) => {
        console.log(id);
        const API_URL = 'http://localhost:8000/api/crypto/delete/' + id;
        //const API_URL = 'https://jsonplaceholder.typicode.com/users/'+id;
        fetch(API_URL)
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
                console.log(JSON.stringify(dataResponse))
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
        console.log(crypto);
        if (!data) {
            return <div>Cargando</div>
        } else {
            return (
                <div className="crear-formulario">
                    <table className='table'>
                        <thead className='table-head'>
                            <tr >
                                <th className='index'>#</th>
                                <th className='table-coin'>Moneda</th>
                                <th className='table-price'>Precio</th>
                                <th className='table-price-change'>24h %</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {crypto.map((crypt) => (
                                    //console.log(crypt);
                                    //const { name, price, creation_date, algorithm } = crypt;
                                   
                                    < tr key={crypt.id} className="crear-formulario2">
                                        <td className='crear-label2'>{crypt.id}</td>
                                        <td className='crear-label2'>{crypt.name}</td>
                                        <td className='crear-label2'>{crypt.price}</td>
                                        <td className='crear-label2'>{crypt.creation_date}</td>
                                        <td className='crear-label2'>{crypt.algorithm}</td>
                                        <td>
                                        <button className='crear-boton32' onClick={() => this.borrarDatos(crypt.id)}>Borrar</button>
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