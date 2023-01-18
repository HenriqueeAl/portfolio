import './habilidades.scss'
import { AiFillHtml5 } from 'react-icons/ai';

interface Habilidade {
    img: string;
    name: string
}

const Habilidade = (props: Habilidade)=>{
    return(
        <div className="habilidade">
            <img src={props.img}></img>
            <p>{props.name}</p>
        </div>
    )
}

export const Habilidades = ()=>{
    return(
        <div className='habilidades' id='habilidades'>
            <h3>Habilidades</h3>
            <div className='lista-habilidades'>
                <Habilidade name='HTML' img='html.svg'/>
                <Habilidade name='CSS' img='css.svg'/>
                <Habilidade name='Sass' img='sass.svg'/>
                <Habilidade name='JavaScript' img='js.svg'/>
                <Habilidade name='TypeScript' img='ts.svg'/>
                <Habilidade name='ReactJs' img='react.svg'/>
            </div>
        </div>
    )
}