import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Default } from "./displayOptions/Default";
import { Eu } from "./displayOptions/Eu";
import { Exp } from "./displayOptions/Experiencias";
import { Hab } from "./displayOptions/Habilidades";
import { Sobre } from "./displayOptions/Sobre";

export function Content() {
  const [pager, setPager] = useState("eu");
  const OptionsRef = useRef(document.createElement("div"));
  const [widthRef, setWidthRef] = useState(0);

  useEffect(() => {
    setWidthRef(OptionsRef.current.offsetWidth);
  }, [widthRef]);

  return (
    <Container>
      <Options ref={OptionsRef}>
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
      <Display refWidth={widthRef}>
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
                  <>{pager === "hab" ? <Hab /> : <Default />}</>
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

interface DisplayProps {
  refWidth: number;
}

const Display = styled.div<DisplayProps>`
  margin-top: 1rem;
  width: ${(props) => props.refWidth}px;
  background: #fff;
  border-radius: 0 0 10px 10px;
  overflow-y: auto;
  max-height: 360px;
  
  ::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 

}
  h3 {
    color: #000;
  }
  @media (max-width: 648px) {
    width: 90%;
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
