import styled from "styled-components";

export default function Bot() {
    return(
       <DivBot>
      <PBot>0/4 CONCLUÍDOS</PBot>
       </DivBot>
    );
    
}

const DivBot= styled.div`
width: 100%;
height: 10.5%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`
const PBot= styled.p`
font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;
`