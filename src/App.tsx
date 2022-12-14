import './app.scss'
import { Certificados } from './components/Certificados/Certificados'
import { Contatos } from './components/Contatos/Contatos'
import { Habilidades } from './components/Habilidades/Habilidades'
import { Projetos } from './components/Projetos/Projetos'
import { Sobre } from './components/Sobre/Sobre'

const togglemenu = ()=>{
  document.getElementById('mobile')?.classList.toggle('display')
}

const removemenu = ()=>{
  document.getElementById('mobile')?.classList.remove('display')
}

const tag = '</>'

function App() {

  return (
    <div className="App container">
      <header>
        <nav className='desktop'>
          <div className='tag'>{tag}</div>
          <ul>
            <li><a href='#sobre'>Sobre</a></li>
            <li><a href='#habilidades'>Habilidades</a></li>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#certificados'>Certificados</a></li>
            <li><a href='#contatos'>Contatos</a></li>
          </ul>
        </nav>
        <nav className='mobile'>
          <img src='menu.svg' onClick={togglemenu}></img>
          <ul id='mobile'>
            <div className='close'>
              <img src='close.svg' onClick={togglemenu}></img>
            </div>
            <li><a href='#sobre' onClick={togglemenu}>Sobre</a></li>
            <li><a href='#habilidades' onClick={togglemenu}>Habilidades</a></li>
            <li><a href='#projetos' onClick={togglemenu}>Projetos</a></li>
            <li><a href='#certificados' onClick={togglemenu}>Certificados</a></li>
            <li><a href='#contatos' onClick={togglemenu}>Contatos</a></li>
          </ul>
        </nav>
      </header>
      <div onClick={removemenu}>
        <Sobre/>
        <Habilidades />
        <Projetos />
        <Certificados />
        <Contatos />
      </div>
    </div>
  )
}

export default App
