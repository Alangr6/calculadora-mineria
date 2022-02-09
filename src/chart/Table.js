import React from 'react'
import CoinPrice from './CoinPrice'

export const Table = ({coins}) => {
    return (
        <div>
            <h1 className='titulo-precio'>Precio en directo</h1>
            <div className='precios'>
                {coins.map(coin => (
                    <CoinPrice coin={coin}/>
                ))}
            </div>
        </div>
    )
}
