import React, { useState,useEffect } from 'react'
import { Container } from './Container'
import { Result } from './Result'
import { ConverterBtc } from '../../converter/ConverterBtc'

import { Navbar2 } from '../../router/Navbar2'
import CoinPrice from '../../chart/CoinPrice'



export const Bitcoin = () => {
    
    const [coins,setCoins] = useState([])
    

    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
      fetch(res)
      .then(response => response.json())
      .then(data => setCoins(data))
         },[])


    return (
        <div>
            <Navbar2></Navbar2>
           <Result></Result> 
           <Container></Container>
           <ConverterBtc coins={coins}></ConverterBtc>
           <CoinPrice coins={coins}></CoinPrice>
          
         
           
        </div>
    )
}
