import React from 'react'

const CoinPrice = ({coin}) => {
    console.log(coin);
    
    return (
      
      <div className='precio-separado'>
        
             
              <h2> {coin.name}</h2>
           
          <h2 className='precio-separado2'>{coin.current_price}$</h2>
      </div>
    )
}

export default CoinPrice
