import React, { useState } from 'react'
import { Container } from './Container'
import { Result } from '../Result'
import { Converter } from '../converter/Converter'
import { Table } from '../chart/Table'
import { Navbar2 } from '../router/Navbar2'



export const Bitcoin = () => {
    
  


    return (
        <div>
            <Navbar2></Navbar2>
           <Result></Result> 
           <Container></Container>
         
           
        </div>
    )
}
