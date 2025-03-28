import { useState } from "react";

function App() {

  const [nome, setNome] = useState("Memphis")

  //var nome = "Zacarias Jr.";

  const Fomulario = () => {
    return (
      <div>
        <input 
        className="nome"
        name = "nome"
        onChange={(e)=>{setNome(e.target.value)}}
        placeholder="Digite um nome..."
        type="text" />
        <button 
        onClick={()=>{alert(nome)}}
        className="botao">
          CLIQUE AQUI
        </button>
      </div>
    )
  }

  return (
    <div>
        <h3>Pizzaria 2F</h3>
        <Fomulario />
        <Fomulario />
        <Fomulario />
    </div>
  )
}

export default App