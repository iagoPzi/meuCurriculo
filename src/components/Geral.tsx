import styled from "styled-components";
import { Content } from "./Content";
import { PdfButton } from "./PdfButton";

export function Geral(){

    
    return(
     <Container>
        <PdfButton/>
         <h1>Iago Pzivitovski</h1>
         <Content/>
     </Container>
    );

}

const Container = styled.main`

    height: 100vh;
    background: var(--back);

    h1{
        font-size: 2.5rem;
        padding-top: 1rem;
        text-align: center;
        color: var(--blue-400);
        margin-bottom: 1.5rem;
    }
    `
