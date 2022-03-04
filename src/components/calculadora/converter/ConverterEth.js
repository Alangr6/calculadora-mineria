import React from 'react'
import { useState } from 'react'


export const ConverterEth = ({ coins }) => {
    const [dollarValue, setDollars] = useState(0)
    return (
        
            <form className="input-style2">

                <label className='label-2'>Cantidad de Ethereum minado 24h
                    <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollars(e.target.value * coins[1].current_price)} />
                </label>
                <label className='label-2'>Valor en $
                    <input type="number" className='input-number' placeholder='0' value={dollarValue}  />
                </label>

            </form>

    )
}
