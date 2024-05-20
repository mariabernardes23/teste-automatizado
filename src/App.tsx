import { useState } from 'react'
import './App.css'
import { Formulario  } from './components/formulario/formulario'

export interface Filme {
  nome: string,
  anoDeLancamento: string
}

function App() {
  const [filmes, setFilmes] = useState<Filme[]>([])

  function adicionarFilme(filme: Filme){
    setFilmes([...filmes, filme])
    console.log(filmes);
    
  }

  return (
    <div>
      <Formulario aoSubmeter={adicionarFilme}/>
    </div>
  )
}

export default App
