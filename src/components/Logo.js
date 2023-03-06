import styled from "styled-components";

export default function Logo() {
    return(
   <DivLogo>
    <ImgLogo src="assets/logo.png"/>
    <PLogo>ZapRecall</PLogo>
   </DivLogo>
    );
}


const DivLogo = styled.div`
width:100%;
height: 19%;
max-height: 153px;
display: flex;
justify-content: center;
align-items: center;

border-top:1px solid #DBDBDB;
border-right:1px solid #DBDBDB;
border-left:1px solid #DBDBDB;
`;


const ImgLogo = styled.img`
width: 52px;
height: 60px;
`;


const PLogo = styled.p`
font-family: 'Righteous';
font-size: 36px;
font-weight: 400;
line-height: 45px;
letter-spacing: -0.012em;
text-align: center;
color: #FFFFFF;
padding-left: 25px;
`;

