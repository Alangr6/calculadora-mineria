import React, { useState } from 'react'
import { Container } from './Container'
import { Result } from '../Result'
import { Converter } from '../converter/Converter'



export const Bitcoin = () => {
    
  


    return (
        <div>
           <Result></Result> 
           <Container></Container>
           <Converter coins={coins}></Converter>
           
        </div>
    )
}
