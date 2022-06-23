import styled from "styled-components";

export function Hab(){
    return(
     <Container>
        <p>Principais tecnologias que uso:</p>
         <ul>
            {Object.entries(Habilidades).map(Habilidades => (
                <li>{Habilidades[1]}</li>
            ))}
         </ul>
     </Container>
    );

}

const Container = styled.div`
    padding: 5px 20px;
    text-align: center;
    color: var(--blue-800);
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
                color: var(--blue-400);
                background: var(--blue-800);
            }
        }
    }

`;


const Habilidades = {
    1: 'HTML',
    2: 'CSS',
    3: 'SASS',
    4: 'Javascript',
    5: 'Typescript',
    6: 'ReactJS',
    7: 'Styled Components',
    8: 'Tailwind CSS',
}