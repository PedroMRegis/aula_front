import styled from "styled-components"

function App (){
    return (
        <DashboardStyle>
            <IMGstyle src = "src/assets/imagens.png"></IMGstyle>

            <H1Style> Handout Front-End </H1Style>
            <H2Style> Introdução básica ao Front-End</H2Style>

            <p>Atividade prática</p>
            


        </DashboardStyle>
    )
}
  
export default App


const DashboardStyle = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100vh;
 background-color: #e9e4e4;
 font-family: Arial, sans-serif;
`;
const H1Style = styled.h1`
    color: red;
    text-align: center;
`;

const H2Style = styled.h2`
    color: black;
    text-align: center;
`;
const IMGstyle = styled.img`
    width: 20%;
    height: auto;
    margin: 5rem auto;
`;

