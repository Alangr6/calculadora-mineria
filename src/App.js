  import React from 'react'
import { Container } from './Container'
import { FlavorForm, Main } from './Main'
import { Navbar } from './Navbar'
import { Rellenar } from './Rellenar'
  
  export default function App  ()  {
      return (
          <div>
              <Navbar></Navbar>
              <Main></Main> 
              <FlavorForm></FlavorForm>
              <Rellenar></Rellenar>
              <Container> </Container>
          </div> 
      )
  }
  
    
