import {Routes, Route, BrowserRouter} from "react-router-dom"

import React from 'react'
import { Bitcoin } from "../bitcoin/Bitcoin"
import { Ethereum } from "../ethereum/Ethereum"
import { Navbar2 } from "./Navbar2"

export const Cambio = () => {
    return (
        <BrowserRouter>
        <Navbar2></Navbar2>
            <Routes>
                <Route path="/" element={<Bitcoin/>}/>
                <Route path="/ethereum" element={<Ethereum/>}/>
            </Routes>
        </BrowserRouter>
    )
}
