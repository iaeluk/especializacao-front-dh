import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";

import  { useQuery }  from 'react-query'

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

const Formulario = () => {
   
  const {data} = useQuery(
    'obtendoTipos',
    async function obter() {
      const resposta = await fetch('https://pokeapi.co/api/v2/type/')
      const json = await resposta.json();
      return json;
    } 
  )

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input name="nome" label="Nome" shouldFocus={true}/>
              <Input name="sobrenome" label="Sobrenome" />
              <Input name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input name="nomePokemon" label="Nome" isPokemon={true} />
              <label for="Tipo">Tipo:</label>
              <select>
                {data?.results?.map((tipo) => (
                  <option value={tipo.name}>{tipo.name}</option>
                ))}
              </select>
              {/* <Input name="tipoPokemon" label="Tipo" type="select" isPokemon={true}/> */}
              <Input name="elementoPokemon" label="Elemento" isPokemon={true}/>
              <Input name="alturaPokemon" label="Altura" isPokemon={true}/>
              <Input name="idadePokemon" label="Idade" isPokemon={true}/>
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;
