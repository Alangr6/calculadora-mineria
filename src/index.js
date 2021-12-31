import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import './Navbar.css'
import './Main.css'

const Bitcoin = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max'

ReactDOM.render(
    
    <App/>
    ,
    document.getElementById('root')
)