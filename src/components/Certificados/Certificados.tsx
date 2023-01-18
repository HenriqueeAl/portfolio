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
            <h3>Certificados</h3>
            <div className='lista-certificados'>
                <Certificado name='Desenvolvimento Front-end'
                acessar='https://cursos.dankicode.com/api/certificados/59b21afa-c47a-4111-9cac-c1969ddef6d3'/>
                <Certificado name='Treina Web Multi-stack'
                acessar='https://www.treinaweb.com.br/certificado/COE3ES36KOMH'/>
                <Certificado name='Curso React.Js'
                acessar='https://www.udemy.com/certificate/UC-91fda60e-8ff0-4123-9572-366a6d3a3a0a/'/>
            </div>
            
        </div>
    )
}