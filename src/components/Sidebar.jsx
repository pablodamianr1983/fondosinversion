import React from 'react';
import GraficoFavoritos from './GraficoFavoritos';
import Notas from './Notas';

function Sidebar({ consultasFavoritas, setConsultasFavoritas, totalRendimientos, notas, setNotas, cargarFavoritoEnConsulta }) {
  const borrarFavoritos = () => {
    if (confirm("¿Estás seguro de que quieres borrar todas las consultas favoritas?")) {
      setConsultasFavoritas([]);
      localStorage.removeItem('consultasFavoritas');
    }
  };

  return (
    <div id="sidebar">
      <h2>Consultas Favoritas</h2>
      <button onClick={borrarFavoritos}>Borrar Favoritas</button>
      <ul id="favoritosList">
        {consultasFavoritas.map((consulta, index) => (
          <li key={index}>
            {consulta.nombreFondo} - Fondo: {consulta.fondo}, Clase: {consulta.clase}, Monto: {consulta.monto}
            <button onClick={() => cargarFavoritoEnConsulta(1, index)}>Cargar en Consulta 1</button>
            {/* Puedes agregar más botones para cargar en diferentes consultas si lo deseas */}
          </li>
        ))}
      </ul>
      <h1 id="totalRendimientos">Total de rendimientos: {totalRendimientos}</h1>
      <GraficoFavoritos consultasFavoritas={consultasFavoritas} />
      <Notas notas={notas} setNotas={setNotas} />
    </div>
  );
}

export default Sidebar;
