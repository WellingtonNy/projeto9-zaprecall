import styled from "styled-components"
import Logo from "./Logo"
import Bot from "./Bot"


export default function App() {
  return(
 
   <ContainerApp>
    <Logo />
    <Bot />
  </ContainerApp>
  
  )
};


const ContainerApp = styled.div`
width: 100%;
margin: 0 auto;
max-width: 375px;
background-color: #FB6B6B;
height: 667px;
max-height: 100%;
`