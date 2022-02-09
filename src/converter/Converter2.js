import React from 'react'
import { useState } from 'react'


export const Converter2 = ({ coins }) => {
    const [dollarValue, setDollars] = useState(0)
    return (
        <div className="input-style">
            <form>

                <label className='label'>Cantidad de Ethereum
                    <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollars(e.target.value * coins[1].current_price)} />
                </label>
                <label className='label'>Valor en $
                    <input type="number" className='input-number' placeholder='0' value={dollarValue}  />
                </label>

            </form>
        </div>

    )
}
