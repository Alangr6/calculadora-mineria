  import React, { useEffect, useState } from 'react'
//import { Container } from './Container'
import {  Header } from './Header'
//import { Navbar } from './Navbar'
//import { Rellenar } from './Rellenar'
import { Table } from './chart/Table'
//import axios from 'axios'
import { Cambio } from './router/Cambio'
import { Converter } from './converter/Converter'
import { Converter2 } from './converter/Converter2'
  
  export default function App  ()  {

    const [coins,setCoins] = useState([])

    // const chart = async () => {
    //   const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
    // console.log(res.data);
     
    // setCoins(res.data)
    // }

    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'

    console.log(coins);
    useEffect(() => {
      fetch(res)
      .then(response => response.json())
      .then(data => setCoins(data.slice(0,2)))
         },[])

      return (
          <div>
         
              <Header></Header> 
              <Cambio></Cambio>
              <Table coins={coins}></Table>
             {/*  <Converter coins={coins}></Converter> */}
            {/*  <Converter2 coins={coins}></Converter2> */}
          </div> 
      )
  }
  
    
