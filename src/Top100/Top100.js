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

    return (


        
        <table>
            <thead>
               <th>name</th>
            </thead>
            <tbody>
                {coins.map(coin => (
                    <tr>
                        {coin.name}
                        
                    </tr>
                    
                ))}
                
            </tbody>
        </table>
    )
}
