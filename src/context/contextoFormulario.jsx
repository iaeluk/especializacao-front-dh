// Aqui devemos criar nosso contexto e nosso provider.
import React, { createContext, useReducer } from "react";

const initialState = {
    treinador : {
        nome : '',
        sobrenome: '',
        email: ''
    }, 
    pokemon: {
        nomePokemon : '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: '',
        idadePokemon: ''
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'ATUALIZAR_TREINADOR':
            return {
                ...state,
                treinador: {
                    ...state.treinador,
                    ...action.payload
                }
            }
        case 'ATUALIZAR_POKEMON':
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}

export const PokemonData = createContext()

export const PokemonDataProvider = ({children}) => {

    const [formulario, dispatch] = useReducer(reducer, initialState)

    const handleInputValue = (type, valueInput) => {
        const {key, value} = valueInput
        
        dispatch({
            type,
            payload: {
                [key]: value
            }
        })
    }

    return (
        <PokemonData.Provider value={{formulario, handleInputValue}}>
            {children}
        </PokemonData.Provider>
    )
}




