import React, { useState, useContext, useEffect, useRef } from "react";
import { PokemonData } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text", shouldFocus = false, isPokemon = false, }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const {handleInputValue, formulario} = useContext(PokemonData)

  // Além disso, usaremos um estado local para lidar com o estado da input.

  // const [inputValue, setInputValue] = useState()

  const [value, setValue] = useState(formulario[name] || "");

  const ref = useRef();

  useEffect(() => {
    if (ref.current && shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    setValue(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }

  //   setData({
  //     ...data,
  //     [name]: inputValue
  // })

   handleInputValue(isPokemon ? "ATUALIZAR_POKEMON" : "ATUALIZAR_TREINADOR", {
     key: name,
     value: value
   })

  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
