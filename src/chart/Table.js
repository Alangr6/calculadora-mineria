import React from 'react'
import Coin from './Coin'

export const Table = ({coins}) => {
    return (
        <div>
           
            <div className='precios'>
                {coins.map(coin => (
                    <Coin coin={coin}></Coin>
                ))}
            </div>
        </div>
    )
}
