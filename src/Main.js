import React from 'react'

export const Main = () => {
    return (
        <div>
            <h1 className='titulo'>Calculadora de ingresos de minado</h1>

            
        </div>
    )
}


export class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Bitcoin'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
     
      event.preventDefault();
    }
  
    render() {
      return (
        <form className='seleccionador' onSubmit={this.handleSubmit}>
          <label>
            Elige la moneda
            <select value={this.state.value} onChange={this.handleChange}>      
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
            </select>
          </label>
          
        </form>
      );
    }
  }