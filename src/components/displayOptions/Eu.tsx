import { GithubLogo, LinkedinLogo } from "phosphor-react";
import styled from "styled-components";

export function Eu() {
  return (
    <Container>
      <p>
        Olá, me chamo Iago Pzivitovski, tenho 22 anos.
        <br />
        Sou formado em Análise e desenvolvimento de sistemas, e hoje estudo
        desenvolvimento web.
      </p>
      <p>
        Estou sempre em busca de novos conhecimentos e crio meus projetos para
        por em prática os conhecimentos que adquiri.
      </p>

      <div>
        <a href="https://www.linkedin.com/in/pziago/" target="_blank">
          <span>Linkedin</span>
          <LinkedinLogo weight="bold" className="logo" />
        </a>
        <a href="https://github.com/iagoPzi" target="_blank">
          <GithubLogo weight="bold" className="logo" />
          <span>Github</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 7%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    color: var(--blue-400);
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    color: var(--blue-800);
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      span {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .logo {
        font-size: 2rem;
      }
      :hover {
        span {
          opacity: 1;
        }
      }
    }
  }
`;
