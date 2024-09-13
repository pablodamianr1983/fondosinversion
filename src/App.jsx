import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Consulta from './components/Consulta';
import './styles/App.css';
import './styles/theme.css';
import useLocalStorage from './hooks/useLocalStorage';
import listaFondos from './data/fondos';  // Importar la lista de fondos predeterminada

function App() {
  const [consultas, setConsultas] = useState([{ id: 1 }]);
  const [totalRendimientos, setTotalRendimientos] = useState(0);
  const [consultasFavoritas, setConsultasFavoritas] = useLocalStorage('consultasFavoritas', []);
  const [notas, setNotas] = useLocalStorage('notas', '');
  const [resultados, setResultados] = useState([]);

  const agregarConsulta = () => {
    setConsultas([...consultas, { id: consultas.length + 1 }]);
  };

  const cargarFavoritoEnConsulta = (consultaId, favoritoId) => {
    const favorito = consultasFavoritas[favoritoId];
    if (favorito) {
      setConsultas((prevConsultas) =>
        prevConsultas.map((consulta) =>
          consulta.id === consultaId
            ? { ...consulta, ...favorito }
            : consulta
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Sidebar 
        consultasFavoritas={consultasFavoritas} 
        setConsultasFavoritas={setConsultasFavoritas}
        totalRendimientos={totalRendimientos}
        notas={notas}
        setNotas={setNotas}
        cargarFavoritoEnConsulta={cargarFavoritoEnConsulta} // Pasar la función de cargar favorito
      />
      <div id="container">
        <h1>Consulta Rendimiento Diario</h1>
        {consultas.map((consulta) => (
          <Consulta 
            key={consulta.id} 
            id={consulta.id} 
            setTotalRendimientos={setTotalRendimientos}
            consultasFavoritas={consultasFavoritas}
            setConsultasFavoritas={setConsultasFavoritas}
            setResultados={setResultados}
            resultados={resultados}
            cargarFavoritoEnConsulta={cargarFavoritoEnConsulta} // Pasar la función de cargar favorito a cada consulta
            listaFondos={listaFondos}  // Pasar la lista de fondos predeterminada
          />
        ))}
        <button onClick={agregarConsulta}>Agregar Consulta</button>
      </div>
    </div>
  );
}

export default App;
