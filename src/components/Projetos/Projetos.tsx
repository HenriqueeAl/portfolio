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
            <Projeto name='Blizzard'
                descricao='Um desafio da plataforma brchallenges feito com ReactJs, TypeScript e SASS.'
                visu='https://blizzard-iota.vercel.app/'
                repo='https://github.com/HenriqueeAl/blizzard'
                />
                <Projeto name='Pizza Time' 
                descricao='Landing Page de pizzas utilizando Nexts com TypeScript e SASS.'
                visu='https://pizza-time-five.vercel.app/'
                repo='https://github.com/HenriqueeAl/Pizza-Time'
                />
                <Projeto name='Burger Empire'
                descricao='Um desafio da plataforma brchallenges feito com HTML, Sass, ReactJs e TypeScript.'
                visu='https://empire-burger-brchallenges.vercel.app/'
                repo='https://github.com/HenriqueeAl/Empire-Burger---BRChallenges'
                />
            </div>
        </div>
    )
}