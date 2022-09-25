import './contatos.scss'

export const Contatos = ()=>{
    return (
        <div className='contatos' id='contatos'>
            <div className='row'>
                <div className='GitHub'>
                    <a href='https://github.com/HenriqueeAl' target='_blank'>
                        <img src='github.png'></img>
                    </a>
                </div>
                <div className='LinkedIn'>
                    <a href='https://www.linkedin.com/in/henrique-almeida-de-oliveira/' target='_blank'>
                        <img src='linkedin.png'></img>
                    </a>
                </div>
            </div>
            <div className='email'>
                  <p>henrique.almeida231@hotmail.com</p>  
            </div>
        </div>
    )
}