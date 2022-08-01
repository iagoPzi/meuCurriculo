import { useState } from "react";
import styled from "styled-components";

export function Exp() {
  const [showExp, setShowExp] = useState(false);

  return (
    <Container>
      <p>
        Ainda não possuo experiência profissional na área, <br />
        você pode mudar isso ;)
      </p>

      <button onClick={() => setShowExp(!showExp)}>Demais Experiências...</button>

      {showExp && (
        <OutrasExp>
          {DemaisExp.map((exp) => (
            <div>
              <h3>{exp.Empresa}</h3>
              <p>
                <i>{exp.Cargo}</i>
              </p>
              <p>{exp.Tarefas}</p>
            </div>
          ))}
        </OutrasExp>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  p {
    text-indent: 0.5rem;
    font-size: 1.2rem;
  }
    button {
        background: var(--blue-800);
        border: none;
        padding: 0.3rem;
        font-size: .9rem;
        border-radius: 5px;
        color: #fff;
        margin-top: 1rem;
    }
`;

const OutrasExp = styled.div`
  div {
    & + div:before {
      content: "";
      display: block;
      margin: 0.5rem auto;
      width: 95%;
      height: 2px;
      background: var(--blue-800);
    }
  }

  h3 {
    font-size: 1.2rem;
    color: var(--blue-800);
  }

  p {
    font-size: 1rem;
  }
  i {
    font-size: 0.8rem;
  }
`;

const DemaisExp = [
  {
    Empresa: "Baldo S/A",
    Cargo: "Auxiliar de expedição (Agosto de 2021 – Atual)",
    Tarefas:
      "Separação dos produtos necessários para atender os pedidos passados, registrando a saída dos mesmos. Auxílio do carregamento dos produtos às transportadoras.",
  },
  {
    Empresa: "Farmácias Rodocentro",
    Cargo: "Estoquista (Agosto de 2020 - Julho de 2021)",
    Tarefas:
      "Recebimento de mercadorias conferindo os lotes para verificar se a entrega está correta. Separação e expedição de produtos para outras filiais.",
  },
  {
    Empresa: "Rooster",
    Cargo: "Designer gráfico (Setembro de 2018 - Julho de 2020)",
    Tarefas:
      "Criação e manutenção de artes gráficas como panfletos, outdoors, banners, etc. Auxílio à produção montando os materiais impressos.",
  },
];
