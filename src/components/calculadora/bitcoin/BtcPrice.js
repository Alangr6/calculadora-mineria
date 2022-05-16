import React, { useState, useEffect } from 'react'


const BtcPrice = () => {

  const [coins, setCoins] = useState([])

  console.log(coins);

  const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    fetch(res)
      .then(response => response.json())
      .then(data => setCoins(data.slice(0, 2)))

  }, [])
  const [dollarValue, setDollars] = useState(0)
  const [dollarValueEth, setDollarsEth] = useState(0)


  return (


    <div className=''>

      <div className="converter">
        <div className="input-style2">

          <label className='label-2'>Cantidad de Bitcoin minado 24h
            <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollars(e.target.value * coins[0].current_price)} />
          </label>
          <label className='label-2'>Valor en $
            <input type="number" className='input-number' placeholder='0' value={dollarValue} />
          </label>

        </div>

        <div className="input-style2-1">

          <label className='label-2'>Cantidad de Ethereum minado 24h
            <input type="number" className='input-number' placeholder='0' onChange={(e) => setDollarsEth(e.target.value * coins[1].current_price)} />
          </label>
          <label className='label-2'>Valor en $
            <input type="number" className='input-number' placeholder='0' value={dollarValueEth} />
          </label>

        </div>

      </div >

      <div className='klk'>
        {coins.map(coin => (
          <div className="price" key={coin}>

            <h2 className=''>{coin.name}: {coin.current_price}$</h2>


          </div>

        ))}
      </div>



    </div>

  )
}

export default BtcPrice
