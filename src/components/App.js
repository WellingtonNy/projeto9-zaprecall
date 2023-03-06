import styled from "styled-components"
import Logo from "./Logo"
import Bot from "./Bot"
import Mid from "./Mid"


export default function App() {
  return(
 
   <ContainerApp>
    <Logo />
    <Mid />
    <Bot />
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