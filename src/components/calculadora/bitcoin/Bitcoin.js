import React, { useState, useEffect } from 'react'
import { ConverterBtc } from './ConverterBtc'
import BtcPrice from './BtcPrice'



export const Bitcoin = () => {

    const [coins, setCoins] = useState([])


    const res = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        fetch(res)
            .then(response => response.json())
            .then(data => setCoins(data))
    }, [])


    return (
        <div>
            <ConverterBtc coins={coins}></ConverterBtc>
            <BtcPrice coins={coins}></BtcPrice>



        </div>
    )
}
