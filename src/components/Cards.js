
import { useState } from "react";
import styled from "styled-components";


export default function Cards(props) {

   const { question, answer } = props.elemento
   const indice = props.indice
   const [controle, setControle] = useState(0)
   const [final, setFinal] = useState('assets/seta_play.png')
   const [cor, setCor] = useState('#333333')
   const [ativo, setAtivo] = useState(false)

   return (
      <>
         <DivCard
            ativo={ativo}
            cor={cor}
            final={final}
            controle={controle}
            setControle={setControle}>

            <div>
               <p data-test="flashcard-text">Pergunta {indice + 1}</p>
               <button data-test="play-btn" disabled={ativo} onClick={() => setControle(1)}>
                  <img src={final}></img>
               </button>
            </div>

         </DivCard>

         <Pergunta controle={controle} setControle={setControle}>
            <p data-test="flashcard-text">{question}</p>
            <div>
               <button data-test="turn-btn" onClick={() => setControle(2)}><img src="assets/seta_virar.png"></img></button>
            </div>
         </Pergunta>
         <Resposta setAtivo={setAtivo} setCor={setCor} setFinal={setFinal} controle={controle} setControle={setControle} >
            <p data-test="flashcard-text">{answer}</p>
            <div>
               <button data-test="no-btn" onClick={() => (setFinal('assets/icone_erro.png'), setControle(0), setCor('#FF3030'), setAtivo(true),props.setRespondidas(props.respondidas+1))}>Não lembrei</button>
               <button data-test="partial-btn" onClick={() => (setFinal('assets/icone_quase.png'), setControle(0), setCor('#FF922E'), setAtivo(true), props.setRespondidas(props.respondidas+1))}>Quase não lembrei</button>
               <button data-test="zap-btn" onClick={() => (setFinal('assets/icone_certo.png'), setControle(0), setCor('#2FBE34'), setAtivo(true),props.setRespondidas(props.respondidas+1))}>Zap!</button>
            </div>
         </Resposta>
      </>
   )
}



const Resposta = styled.div`
width: 300px;
max-height: 100%;
background-color: #FFFFD4;
display: ${(props) => (props.controle === 2 ? 'flex' : 'none')};
flex-direction: column;
justify-content: space-between;

p{
padding-left: 15px;
padding-right: 15px;
padding-top: 15px;
font-family: 'Recursive';
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
}
 
div{
   display: flex;
   justify-content: space-between;
   padding-bottom: 10px;
   padding-right: 15px;
   padding-left: 15px;
   padding-top: 15px;
}

div button {
width: 85px;
height: 37px;
font-family: 'Recursive';
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
border:none;
border-radius: 5px;
}

div :nth-child(1){
   background-color: #FF3030;
}

div :nth-child(2){
   background-color: #FF922E;
}

div :nth-child(3){
   background-color: #2FBE34;
}  
`


const Pergunta = styled.div`
width: 300px;
min-height: 131px;
background-color: #FFFFD4;
display: ${(props) => (props.controle === 1 ? 'flex' : 'none')};
flex-direction: column;
justify-content: space-between;

p{
font-family: 'Recursive';
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
padding: 15px;
}

button{
border: none;
background-color: #FFFFD4;
}

div{
display: flex;
flex-direction: row-reverse;
padding-right: 5px;
padding-bottom: 3px;
}
`


const DivCard = styled.div`
width: 300px;
min-height: 65px;
display: ${(props) => (props.controle === 0 ? 'flex' : 'none')};
justify-content: space-between;
align-items: center;
padding-left: 15px;
padding-right: 15px;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
background-color:#FFFFFF;

button{
   border:none;
   background-color: #FFFFFF;
}

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
color:${(props) => (props.cor)};
text-decoration:${(props) => props.ativo ? 'line-through' : 'none'};
}

div{
   width: 100%;
   display: flex;
   justify-content: space-between;
}
`