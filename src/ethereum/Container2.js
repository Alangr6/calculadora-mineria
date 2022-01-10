import React from 'react'

export const Container2 = () => {
    return (
        <div className="input-style"> 
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
        <input type="number" className='input-number' placeholder='0' />%   
        </label>
        

        
    </div>
    )
}
