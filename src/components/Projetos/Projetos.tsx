import './projetos.scss'

const Projeto = (props: any)=>{
    return (
        <div className="projeto">
            <h1>{props.name}</h1>
            <p>{props.descricao}</p>
            <div className='links'>
                <a href={props.visu} target='_blank'>Vizualizar</a>
                <a href={props.repo} target='_blank'>Repositorio</a>
            </div>
        </div>
    )
}

export const Projetos = ()=>{
    return(
        <div className='projetos' id='projetos'>
            <h3>Projetos</h3>
            <div className='lista-projetos'>
                <Projeto name='Burger Empire'
                descricao='Um desafio da plataforma brchallenges feito com HTML, Sass, ReactJs e TypeScript.'
                visu='https://empire-burger-brchallenges.vercel.app/'
                repo='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'
                />
                <Projeto name='Pokedex' 
                descricao='Fiz uma pokedex consumindo a pokeapi com fetch utilizando as seguintes tecnologias HTML, CSS e ReactJs.'
                visu='https://henriqueeal.github.io/pokedex/'
                repo='https://github.com/HenriqueeAl/pokedex/tree/main'
                />
                <Projeto name='Lista de afazeres'
                descricao='Fiz uma lista de afazeres com HTML, CSS e ReactJs'
                visu='https://henriqueeal.github.io/lista-de-afazeres/'
                repo='https://github.com/HenriqueeAl/lista-de-afazeres'
                />
            </div>
        </div>
    )
}