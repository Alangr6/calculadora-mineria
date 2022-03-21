import {Routes, Route, BrowserRouter} from "react-router-dom"

import React from 'react'

import { Top100 } from "../Top100/Top100"
import { Navbar } from "./Navbar"
import { Navbar2 } from "./Navbar2"
import { Bitcoin } from "../calculadora/bitcoin/Bitcoin"
import { Ethereum } from "../calculadora/ethereum/Ethereum"

import { Home } from "../home/Home"
import { AddCoin} from "../create/AddCoin"
import { AddMiner } from "../create/AddMiner"
import { UpdateCoin } from "../create/UpdateCoin"
import { DeleteCoin } from "../create/DeleteCoin"
import { UpdateMiner } from "../create/UpdateMiner"
import { DeleteMiner } from "../create/DeleteMiner"

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


                <Route path="/mineros" element={<AddMiner/>}/>
                <Route path="/actualizar-minero" element={<UpdateMiner/>}/>
                <Route path="/borrar-minero" element={<DeleteMiner/>}/>


            </Routes>
        </BrowserRouter>
       

    )
}