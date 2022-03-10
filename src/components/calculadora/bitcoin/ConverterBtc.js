import React from 'react'
import { useState } from 'react'


export const ConverterBtc = ({ coins }) => {
    const [dollarValue, setDollars] = useState(0)

    return (

        <div className="input-style">
            <form className="rellenar-style">
                <label className='label-1'>Dinero que quieres invertir
                    <input type="number" className='rellenar-number' placeholder='0' />$
                </label>
                <button className='boton-calculadora'>
                    Calcular
                </button>


            </form>
            <div className='input-style3'>

                <label className='label'>Hashrate del minero
                    <input type="number" className='input-number' placeholder='0' disabled />TH/S
                </label>
                <label className='label'>Energia del minero
                    <input type="number" className='input-number' placeholder='0' />kW
                </label>
                <label className='label'>Coste de la electricidad
                    <input type="number" className='input-number' placeholder='0' />$/kWh
                </label>
                <label className='label'>Comision
                    <input type="number" className='input-number' placeholder='0' value={1} />%
                </label>
            </div>


            <div className="input-style2">

                <label className='label-2'>Cantidad de Bitcoin minado 24h
                    <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollars(e.target.value * coins[0].current_price)} />
                </label>
                <label className='label-2'>Valor en $
                    <input type="number" className='input-number' placeholder='0' value={dollarValue} />
                </label>

            </div>

        

        </div>



    )
}
