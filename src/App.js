  import React, { useEffect, useState } from 'react'
import { Container } from './Container'
import { FlavorForm, Main } from './Main'
import { Navbar } from './Navbar'
import { Rellenar } from './Rellenar'
import { Table } from './chart/Table'
import axios from 'axios'
  
  export default function App  ()  {

    const [coins,setCoins] = useState([])

    const chart = async () => {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false')
    console.log(res.data);
    setCoins(res.data)
    }

    useEffect(() => {
      chart()
         },[])

      return (
          <div>
              <Navbar></Navbar>
              <Main></Main> 
              <FlavorForm></FlavorForm>
              <Rellenar></Rellenar>
              <Container> </Container>
              <Table coins={coins}></Table>
          </div> 
      )
  }
  
    
