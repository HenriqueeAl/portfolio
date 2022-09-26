import './app.scss'
import { Contatos } from './components/Contatos/Contatos'
import { Habilidades } from './components/Habilidades/Habilidades'
import { Projetos } from './components/Projetos/Projetos'
import { Sobre } from './components/Sobre/Sobre'

const togglemenu = ()=>{
  document.getElementById('mobile')?.classList.toggle('display')
  console.log('oi')
}

function App() {

  return (
    <div className="App container">
      <header>
        <nav className='desktop'>
          <ul>
            <li><a href='#sobre'>Sobre</a></li>
            <li><a href='#habilidades'>Habilidades</a></li>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#contatos'>Contatos</a></li>
          </ul>
        </nav>
        <nav className='mobile'>
          <img src='menu.svg' onClick={togglemenu}></img>
          <ul id='mobile'>
            <div className='close'>
              <img src='menu.svg' onClick={togglemenu}></img>
            </div>
            <li><a href='#sobre' onClick={togglemenu}>Sobre</a></li>
            <li><a href='#habilidades' onClick={togglemenu}>Habilidades</a></li>
            <li><a href='#projetos' onClick={togglemenu}>Projetos</a></li>
            <li><a href='#contatos' onClick={togglemenu}>Contatos</a></li>
          </ul>
        </nav>
      </header>
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contatos />
    </div>
  )
}

export default App
