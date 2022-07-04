import styled from "styled-components";

export function Sobre() {
  return (
    <Container>
      <p>
        Esse projeto é uma forma de Currículo, onde posso mostrar um pouco
        de mim.
        <br/>Caso queira tem a versão em PDF clicando no botão no canto
        inferior direito. 
        <br/>Foi desenvolvido em ReactJS e Styled Components.
      </p>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 7%;
  text-align: left;
  display: flex;
  p {
    color: var(--blue-400);
  }
`;
