import React from 'react'

export const Table = ({coins}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>

                    </td>
                </tr>
            </thead>
            <tbody className='precios'>
                {coins.map(coin => (
                    <h1 className='precio-separado'>{coin.name} {coin.current_price}$ </h1>
                ))}
            </tbody>
        </table>
    )
}
