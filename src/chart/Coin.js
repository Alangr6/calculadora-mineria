import React from 'react'

const Coin = ({coin}) => {
    console.log(coin);
    
    return (
      <div className='precio-separado'>
        
              
              <h1> {coin.name}</h1>
           
          <h1 className='precio-separado2'>{coin.current_price}</h1>
      </div>
    )
}

export default Coin
