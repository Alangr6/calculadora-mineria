import React from 'react'
import { useState } from 'react'


export const ConverterBtc = ({ coins }) => {
    const [dollarValue, setDollars] = useState(0)
    
    return (
      
            <form className="input-style">

                <label className='label'>Cantidad de Bitcoin 
                    <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollars(e.target.value * coins[0].current_price)} />
                </label>
                <label className='label'>Valor en $
                    <input type="number" className='input-number' placeholder='0' value={dollarValue}  /> 
                </label>
               
            </form>
       
         
    )
}
