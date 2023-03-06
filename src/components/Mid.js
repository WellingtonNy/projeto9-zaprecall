import styled from "styled-components"
import Cards from "./Cards"


export default function Mid(){
    return(
   <DivMid>
   <Cards />
   </DivMid>

    )
}

const DivMid = styled.div`
width: 100%;
display: flex;
align-items: center;
height: 70.5%;
flex-direction: column;
gap:25px;
padding-top: 10px;
`