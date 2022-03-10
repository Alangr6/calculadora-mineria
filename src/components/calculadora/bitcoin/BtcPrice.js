import React, { useState, useEffect } from 'react'


const BtcPrice = () => {

  const [coins, setCoins] = useState([])

  console.log(coins);

  const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    fetch(res)
      .then(response => response.json())
      .then(data => setCoins(data.slice(0,1)))

  }, [])

  return (


    <div className='precio-junto'>

      {coins.map(coin => (
        <div key={coin}>

          <h2 className='table-price'>Bitcoin: {coin.current_price}$</h2>


        </div>

      ))}

    </div>

  )
}

export default BtcPrice
