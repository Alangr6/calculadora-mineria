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
   
   /*  
    } */
    return (
        <table className='table'>
            <thead className='table-head'>
                <tr >
                    <th className='index-title'>#</th>
                    <th className='table-coin-title'>Moneda</th>
                    <th className='table-price'>Precio</th>
                    <th className='table-price-change'>24h %</th>
                    <th className='table-market-cap'>Capitalizaciòn de mercado</th>
                    <th className='table-volume'>Volumen Ùltimas 24h</th>


                </tr>
            </thead>
            <tbody className='table-body' >
            
                {coins.map(coin => (
                    <tr key={coin.name}>
                        <td className='index'>{coin.market_cap_rank}</td>
                        <td className='img-name' >
                            <img className='img' src={coin.image} ></img>

                            <span className='table-coin' >
                                {coin.name}
                            </span>

                        </td>
                        <td  className='table-price'>{coin.current_price}$</td>
                        <td  className='table-price-change'>{coin.price_change_percentage_24h}%</td>
                        <td className='table-market-cap'>{coin.market_cap}$</td>
                        <td className='table-volume'>{coin.total_volume}$</td>
                    </tr>

                ))}

            </tbody>
        </table>
    )
}
