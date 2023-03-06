import styled from "styled-components"
import Logo from "./Logo"
import Bot from "./Bot"
import Mid from "./Mid"
import { useState } from "react"


export default function App() {
  
  const[respondidas,setRespondidas]=useState(0)
  
  return(
 
   <ContainerApp>
    <Logo />
    <Mid respondidas={respondidas} setRespondidas={setRespondidas} />
    <Bot respondidas={respondidas} />
  </ContainerApp>
  )
};


const ContainerApp = styled.div`
width: 100%;
margin: 0 auto;
max-width: 375px;
background-color: #FB6B6B;
height: 100vh;
max-height: 667px;
`