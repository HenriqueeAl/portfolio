import './projetos.scss'

interface Projeto{
    name: string;
    descricao: string;
    visu: string;
    repo: string
}

const Projeto = (props: Projeto)=>{
    return (
        <div className="projeto">
            <h1>{props.name}</h1>
            <div className='content'>
                <p>{props.descricao}</p>
                <div className='tecs'>
                    <div className='box-tecs'>HTML</div>
                    <div className='box-tecs'>SCSS</div>
                    <div className='box-tecs'>JavaScript</div>
                    <div className='box-tecs'>TypeScript</div>
                    <div className='box-tecs'>React</div>
                    <div className='box-tecs'>Nodejs</div>
                    <div className='box-tecs'>Prisma</div>
                </div>
            </div>
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
                <Projeto name='Todo list / Lista de Afazeres'
                descricao='Meu primeiro projeto full-stack com ele eu aprendi bastante sobre NodeJs e banco de dados.'
                visu='https://todolist-crud.vercel.app/'
                repo='https://github.com/HenriqueeAl/Todolist-crud'
                />
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
                <Projeto name='Space'
                descricao='Um desafio da plataforma brchallenges feito com HTML, Sass, ReactJs e TypeScript.'
                visu='https://space-three-rose.vercel.app/home'
                repo='https://github.com/HenriqueeAl/Space'
                />
            </div>
        </div>
    )
}