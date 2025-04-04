import { useState } from "react";
import poke from './assets/pokeapi_256.png'

function App() {

  //var nome = "Zacarias Jr.";

  const Fomulario = (props) => {

    const [nome, setNome] = useState("Memphis")

    return (
      <div>

        <input 
        className="nome"
        name = "nome"        
        onChange={(e)=>{setNome(e.target.value)}}
        placeholder={props.sombra != null ? props.sombra : "Texto padrão"}
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
        <p>Texto do parágrafo</p>
        <img src={poke} style={{width:200, height:100}} />
        <img src={poke} style={{width:200, height:100}} />
        <Fomulario sombra="Digite seu nome..."/>
        <Fomulario sombra="Digite seu email..."/>
        <Fomulario sombra="(99) 90000-0000"/>
        <Fomulario />
        <Fomulario />
        <Fomulario />
    </div>
  )
}

export default App