import styled from "styled-components"
import Cards from "./Cards"
import CARDS from "../mock";


export default function Mid(){
    return(
   <DivMid>
    {CARDS.map((e)=>
    (
        <Cards elemento={e}/>
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