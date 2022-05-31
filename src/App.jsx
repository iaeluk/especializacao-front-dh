import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import {PokemonDataProvider} from "./context/contextoFormulario";

import {QueryClient, QueryClientProvider} from 'react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <PokemonDataProvider>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/formularioEntrada" element={<Formulario />} />
      </Routes>
      </PokemonDataProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
