import { useState } from "react";
import styled from "styled-components";
import { Eu } from "./displayOptions/Eu";
import { Exp } from "./displayOptions/Experiencias";
import { Hab } from "./displayOptions/Habilidades";
import { Sobre } from "./displayOptions/Sobre";

export function Content() {
  const [pager, setPager] = useState("");
  return (
    <Container>
      <Options>
        <Title isActive={pager === "eu"} onClick={() => setPager("eu")}>
          Sobre mim
        </Title>
        <Title isActive={pager === "hab"} onClick={() => setPager("hab")}>
          Habilidades
        </Title>
        <Title isActive={pager === "exp"} onClick={() => setPager("exp")}>
          Experiências
        </Title>
        <Title isActive={pager === "sobre"} onClick={() => setPager("sobre")}>
          Sobre o Projeto
        </Title>
      </Options>
      <Display>
        {pager === "eu" ? (
          <Eu />
        ) : (
          <>
            {pager === "sobre" ? (
              <Sobre />
            ) : (
              <>
                {pager === "exp" ? (
                  <Exp />
                ) : (
                  <>
                    {pager === "hab" ? <Hab /> : <h3>Selecione uma Opção</h3>}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Display>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue-400);
`;

const Display = styled.div`
  margin-top: 1rem;
  width: 80%;
  height: 800%;
  background: #fff;
  border-radius: 0 0 10px 10px;
  h3 {
    color: #000;
  }
`;
const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 648px) {
      flex-direction: column;
      align-items: center;
  }

`;
interface TitleProps {
  isActive: boolean;
}

const Title = styled.h3<TitleProps>`
  color: ${(props) => (props.isActive ? "var(--blue-400)" : "var(--blue-800)")};
  cursor: pointer;
  transition: color 0.2s;
  &::after {
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background: #fff;
  }
  :hover {
    color: var(--blue-400);
  }
`;
