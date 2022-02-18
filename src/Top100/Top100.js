import React, { useState, useEffect } from 'react'


export const Top100 = () => {

    const [coins, setCoins] = useState([])
    console.log(coins);

    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        fetch(res)
            .then(response => response.json())
            .then(data => setCoins(data))
    }, [])
    const titles = ['Coin', 'Price', 'Price Change']

    return (
        <table className='table'>
            <thead className='table-head'>
                <tr >
                  <th className='table-coin'>Coin</th>
                  <th className='table-price'>Price</th>


                </tr>
            </thead>
            <tbody  >
                {coins.map(coin => (
                    <tr key={coin.name}>
                        <td className='table-body'>
                            <img src={coin.image} style={{width: '3%'}}></img>

                            <span>
                                {coin.name}
                            </span>

                        </td>
                        <td>{coin.current_price}$</td>

                    </tr>

                ))}

            </tbody>
        </table>
    )
}
