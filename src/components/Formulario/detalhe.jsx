import React, {useContext} from "react";
import { PokemonData } from "../../context/contextoFormulario";


const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const {formulario} = useContext(PokemonData)
  const {treinador, pokemon} = formulario
  console.log(formulario)
  
  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {treinador?.nome}</p>
          <p>Sobrenome: {treinador?.sobrenome}</p>
          <p>Email: {treinador?.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {pokemon?.nomePokemon}</p>
          <p>Tipo: {pokemon?.tipoPokemon}</p>
          <p>Elemento: {pokemon?.elementoPokemon}</p>
          <p>Altura: {pokemon?.alturaPokemon}</p>
          <p>Idade: {pokemon?.idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
