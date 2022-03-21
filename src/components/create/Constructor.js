import React, { Component } from "react";
import { Navbar3 } from "../router/Navbar3";
import { Navbar4 } from "../router/Navbar4";


export default class Constructor extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            name : '',
            price: '',
            date: '',
            algorithm:''
        };
    
        this.handleChangeName= this.handleChangeName.bind(this);
        this.handleChangePrice= this.handleChangePrice.bind(this);
        this.handleChangeDate= this.handleChangeDate.bind(this);
        this.handleChangeAlgorithm= this.handleChangeDate.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }


    handleChangeName(e) {
        this.setState({
            name: e.target.value,
        })
    }
    
    handleChangePrice(e) {
        this.setState({
            price: e.target.value,
        })
    }
    
    handleChangeDate(e) {
        this.setState({
            date: e.target.value,
        })
    }
    handleChangeAlgorithm(e) {
        this.setState({
            algorithm: e.target.value,
        })
    }
    
    handleSubmit(e) {
        const API_URL = "http://localhost:8000/api/crypto/create";
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name : this.state.name,
                price : this.state.price,
                date : this.state.date,
                algorithm : this.state.algorithm
            })
        });
    
        e.preventDefault();
    }
  
render() {

   
    const API_URL = "http://localhost:8000/api/crypto/create";
    return (
        
        <div>
               <Navbar3></Navbar3>
               <Navbar4></Navbar4>
               <h1 className='crear-titulo'>Add Moneda</h1>
                <form action={API_URL} method="POST" className="crear-formulario"   >
                    <label className='crear-label'>Nombre
                        <input name='name' type="text" className='crear-input' />
                    </label>
                  
                    <label className='crear-label'>Precio
                        <input name='price' type="number" className='crear-input'  />
                    </label>
                    <label className='crear-label'>Fecha de creacion
                        <input name='creation_date' type="date" className='crear-input' />
                    </label>
                    <label className="crear-label">Algoritmo
                    <input name='algorithm' type="text" className='crear-input' />
    
                       {/*  <select  className='crear-select'>
    
                            <option value="1">SHA-256</option>
                            <option value="2"> Ethash</option>
    
                        </select> */}
                    </label>
                  
                    <button className='crear-boton2' onClick={this.handleSubmit}>
                        Crear
                    </button>
    
                </form>
            
        </div>
      )
}
}