import styled from "styled-components"
import Cards from "./Cards"
import CARDS from "../mock";



export default function Mid(props){
    
    return(
   <DivMid>
    {CARDS.map((e,i)=>
    (
        <Cards setRespondidas={props.setRespondidas} respondidas={props.respondidas}  key={i} elemento={e} indice={i}/>
    )
    )}
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
padding-bottom: 15px;
overflow-y: auto;
`