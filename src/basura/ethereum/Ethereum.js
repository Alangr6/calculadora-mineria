import React, { useEffect, useState } from 'react'
import { Navbar2 } from '../../router/Navbar2'
import { ConverterEth } from './ConverterEth'
import EthPrice from './EthPrice'

export const Ethereum = () => {


    const [coins, setCoins] = useState([])


    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        fetch(res)
            .then(response => response.json())
            .then(data => setCoins(data))
    }, [])

    return (
        <div>
            <Navbar2></Navbar2>
            <ConverterEth coins={coins}></ConverterEth>
            <EthPrice coins={coins}></EthPrice>
        </div>
    )
}
