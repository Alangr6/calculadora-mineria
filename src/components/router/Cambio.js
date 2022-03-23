import {Routes, Route, BrowserRouter} from "react-router-dom"

import React from 'react'

import { Top100 } from "../Top100/Top100"
import { Navbar } from "./Navbar"
import { Navbar2 } from "./Navbar2"
import { Bitcoin } from "../calculadora/bitcoin/Bitcoin"
import { Ethereum } from "../calculadora/ethereum/Ethereum"

import { Home } from "../home/Home"
import { AddCoin} from "../create/AddCoin"
import { AddDevice } from "../create/AddDevice"
import { UpdateCoin } from "../create/UpdateCoin"
import { DeleteCoin } from "../create/DeleteCoin"
import { UpdateDevice } from "../create/UpdateDevice"
import { DeleteDevice } from "../create/DeleteDevice"
import { UpdateCoinButton } from "../create/UpdateCoinButton"
import { UpdateDeviceButton } from "../create/UpdateDeviceButton"

export const Cambio = () => {
    

    return (
        <BrowserRouter>
        <Navbar></Navbar>
      
            <Routes>
             
                <Route path="/table" element={<Top100/>}/>
                <Route path="/bitcoin" element={<Bitcoin/>}/>
                <Route path="/ethereum" element={<Ethereum/>}/>
                <Route path="/" element={<Home/>}/>

                <Route path="/monedas" element={<AddCoin/>}/>
                <Route path="/actualizar-moneda" element={<UpdateCoin/>}/>
                <Route path="/borrar-moneda" element={<DeleteCoin/>}/>


                <Route path="/mineros" element={<AddDevice/>}/>
                <Route path="/actualizar-minero" element={<UpdateDevice/>}/>
                <Route path="/borrar-minero" element={<DeleteDevice/>}/>

                <Route path="/:id/crypto" element={<UpdateCoinButton/>}></Route>
                <Route path="/:id/device" element={<UpdateDeviceButton/>}></Route>


            </Routes>
        </BrowserRouter>
       

    )
}