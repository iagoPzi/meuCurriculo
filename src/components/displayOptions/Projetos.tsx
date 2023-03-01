import { ProjectItem } from "../ProjectItem";
import iagonotes from "../../images/iagonotes.png";
import toggleBtn from "../../images/toggledianoite.png";
import moneyManager from "../../images/moneyManager.png";

export function Projetos() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <ProjectItem
        link="https://money-manager-zeta.vercel.app/"
        image={moneyManager}
        description="App de gerenciamento de gastos, desenvolvido em react com tailwindCss. Adicione suas transações para ter um melhor controle dos teus gastos. As transações adicionadas são salvas no LocalStorage."
      />

      <ProjectItem
        link="https://iagonotes.netlify.app/"
        image={iagonotes}
        description="App ToDo List, desenvolvido em react com tailwindCss. Adicione e delete suas tarefas. As tarefas adicionadas são salvas no LocalStorage."
      />

      <ProjectItem
        image={toggleBtn}
        link="https://diaenoite.netlify.app/"
        description="Toggle dia/noite. Ao clicar no botão irá mudar do dia para a noite. Feito HTML, CSS e javascript puro"
      />

      <p className="text-lg">Mais projetos em produção...</p>
    </div>
  );
}
