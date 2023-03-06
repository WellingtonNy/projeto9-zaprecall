
import styled from "styled-components";


export default function Cards({elemento}){
   const {question,answer} = elemento

return(
<DivCard > 
   <p>Pergunta {1}</p>
   <img src="assets/seta_play.png"></img>
</DivCard>
)
}





const DivCard = styled.div`
width: 300px;
min-height: 65px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 15px;
padding-right: 15px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
background-color:#FFFFFF;


img {
width: 20px;
height: 23px;
}

p{
font-family: 'Recursive';
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #333333;

div{
   display: none;
}

}
`