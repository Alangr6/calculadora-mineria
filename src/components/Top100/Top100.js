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
   
   /*  if(coins.current_price_change_percentage_24h > 0){
         style="color:#008000"
    } */
    return (
        <table className='table'>
            <thead className='table-head'>
                <tr >
                    <th className='index'>#</th>
                    <th className='table-coin'>Moneda</th>
                    <th className='table-price'>Precio</th>
                    <th className='table-price-change'>Cambio 24h</th>
                    <th>Volumen Ùltimas 24h</th>


                </tr>
            </thead>
            <tbody className='table-body' >
                {coins.map(coin => (
                    <tr key={coin.name}>
                        <td className='index'>{coin.market_cap_rank}</td>
                        <td >
                            <img src={coin.image} style={{ width: '4%' }}></img>

                            <span className='table-coin' >
                                {coin.name}
                            </span>

                        </td>
                        <td  className='table-price'>{coin.current_price}$</td>
                        <td  className='table-price-change'>{coin.price_change_percentage_24h}%</td>
                        <td>{coin.total_volume}$</td>
                    </tr>

                ))}

            </tbody>
        </table>
    )
}
