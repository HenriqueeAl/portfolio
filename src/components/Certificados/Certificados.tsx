import './Certificados.scss'

const Certificado = (props: any)=>{
    return (
        <div className="certificado">
            <h1>{props.name}</h1>
            <p>{props.descricao}</p>
            <div className='links'>
                <a href={props.acessar} target='_blank'>Acessar</a>
            </div>
        </div>
    )
}

export const Certificados = ()=>{
    return(
        <div id='certificados' className='certificados'>
            <Certificado name='Treina Web Multi-stack'
            acessar='https://www.treinaweb.com.br/certificado/COE3ES36KOMH'/>
        </div>
    )
}