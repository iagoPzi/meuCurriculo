import styled from "styled-components";

export function SoftSkills(){
    return(
     <Container>
        <p>Minhas Soft Skills:</p>
         <ul>
            {Object.entries(SoftSkill).map(Skill => (
                <li>{Skill[1]}</li>
            ))}
         </ul>
     </Container>
    );

}

const Container = styled.div`
    padding: 1rem 7%;
    text-align: center;
    color: var(--blue-400);
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 1.5rem;
        padding: 1rem;
    }
    ul{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-bottom: 1rem;
        li{
            user-select: none;
            list-style: circle;
            transition: color .3s;
            transition: background .3s;
            padding: 0 1rem 0 .3rem;
            width: fit-content;
            border-radius: 0 5px 5px 0;
            :hover{
                list-style: outside;
                color: var(--blue-800);
                background: var(--blue-400);
            }
        }
    }

`;


const SoftSkill = {
    1: 'Criatividade',
    2: 'Adaptabilidade',
    3: 'Empatia',
    4: 'Flexibilidade',
    5: 'Colaboração',
    6: 'Inteligência emocional'
}