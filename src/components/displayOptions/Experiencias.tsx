import styled from "styled-components";

export function Exp(){
    return(
        <Container>

            <p>Ainda não possuo experiência profissional na área, <br/>você pode mudar isso ;)</p>
        </Container>
    );

}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    p{
        text-indent: .5rem;
    }
`