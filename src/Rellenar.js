import React from 'react'

export const Rellenar = () => {
    return (
       
            <div className="rellenar-style"> 
        <label className='label'>Dinero que quieres invertir
        <input type="number" className='rellenar-number' placeholder='0' />$
        </label>
        <label className='label'>Ganancias diarias
        <input type="number" className='rellenar-number' placeholder='0' />$
        </label>
        </div>
    )
}
