import {Routes, Route, BrowserRouter} from "react-router-dom"

import React from 'react'

import { Top100 } from "../Top100/Top100"
import { Navbar } from "./Navbar"
import { Navbar2 } from "./Navbar2"
import { Bitcoin } from "../bitcoin/Bitcoin"
import { Ethereum } from "../ethereum/Ethereum"

import { Home } from "../home/Home"

export const Cambio = () => {
    return (
        <BrowserRouter>
        <Navbar></Navbar>
      
            <Routes>
             
                <Route path="/table" element={<Top100/>}/>
                <Route path="/bitcoin" element={<Bitcoin/>}/>
                <Route path="/bitcoin" element={<Bitcoin/>}/>
                <Route path="/ethereum" element={<Ethereum/>}/>
                <Route path="/home" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
       

    )
}