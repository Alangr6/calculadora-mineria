import React from 'react'

export const Container2 = () => {
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
        <label className='label'>Hashrate del minero
            <input type="number" className='input-number' placeholder='0' />MH/S
        </label>
        <label className='label'>Energia del minero
            <input type="number" className='input-number' placeholder='0' />W
        </label>
        <label className='label'>Coste de la electricidad
            <input type="number" className='input-number' placeholder='0' />$/kWh
        </label>
        <label className='label'>Comision
            <input type="number" className='input-number' placeholder='0' value={1} />%
        </label>




    </div>
    )
}
