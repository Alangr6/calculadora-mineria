import React , { useEffect, useState }from 'react'
import { Top100 } from './Top100';


export const Table = () => {


    const [coins,setCoins] = useState([])
    console.log(coins);

    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
      fetch(res)
      .then(response => response.json())
      .then(data => setCoins(data))
         },[])

    return (
        <div>
           <Top100 coins={coins}></Top100>
          
        </div>
    )
}
