import React, { useState, useEffect } from 'react';
import listaFondos from '../data/fondos';

function Consulta({ 
  id, 
  setTotalRendimientos, 
  consultasFavoritas, 
  setConsultasFavoritas, 
  setResultados, 
  resultados, 
  cargarFavoritoEnConsulta 
}) {
  const [resultado, setResultado] = useState('');
  const [fondo, setFondo] = useState('');
  const [clase, setClase] = useState('');
  const [nombreFondo, setNombreFondo] = useState('');
  const [montoInvertido, setMontoInvertido] = useState('');

  const [filtroBusqueda, setFiltroBusqueda] = useState('');
  const [fondosFiltrados, setFondosFiltrados] = useState([]);

  useEffect(() => {
    if (filtroBusqueda.trim() === '') {
      setFondosFiltrados(listaFondos);
    } else {
      const filtro = filtroBusqueda.toLowerCase();
      setFondosFiltrados(
        listaFondos.filter(fondo =>
          (fondo.Fondo?.toLowerCase() || '').includes(filtro) ||
          (fondo.URL?.toString() || '').includes(filtro)
        )
      );
    }
  }, [filtroBusqueda]);

  const obtenerRendimiento = async () => {
    if (isNaN(fondo) || isNaN(clase) || isNaN(montoInvertido) || montoInvertido <= 0) {
      setResultado("Por favor, ingrese valores válidos para fondo, clase y monto invertido.");
      return;
    }

    const url = `https://api.cafci.org.ar/fondo/${fondo}/clase/${clase}/ficha`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      const rendimiento = parseFloat(data?.data?.info?.diaria?.rendimientos?.day?.rendimiento);
      
      if (isNaN(rendimiento)) {
        setResultado("No se pudo obtener el rendimiento. Verifique los datos del fondo.");
        return;
      }

      const gananciaDiaria = Math.round((rendimiento / 100) * montoInvertido);

      setTotalRendimientos(prev => prev + gananciaDiaria);

      const resultadoTexto = `Fondo: ${nombreFondo}, Rendimiento diario: ${rendimiento.toFixed(2)}%, Ganancia diaria: ${gananciaDiaria}`;
      setResultado(resultadoTexto);

      const nuevosResultados = [...resultados];
      nuevosResultados[id - 1] = resultadoTexto;
      setResultados(nuevosResultados);

    } catch (error) {
      setResultado("Error al obtener datos");
      console.error(error);
    }
  };

  const guardarComoFavorita = (e) => {
    e.preventDefault();
    const nuevaFavorita = {
      id,
      nombreFondo,
      fondo,
      clase,
      monto: montoInvertido,
    };

    const nuevasFavoritas = [...consultasFavoritas, nuevaFavorita];
    setConsultasFavoritas(nuevasFavoritas);
    localStorage.setItem('consultasFavoritas', JSON.stringify(nuevasFavoritas));
    alert('Consulta guardada como favorita.');
  };

  const cargarFavorito = (favoritoId) => {
    const favorito = consultasFavoritas[favoritoId];
    if (favorito) {
      setNombreFondo(favorito.nombreFondo);
      setFondo(favorito.fondo);
      setClase(favorito.clase);
      setMontoInvertido(favorito.monto);
    }
  };

  const seleccionarFondo = (fondoSeleccionado) => {
    const [fondoNum, claseNum] = fondoSeleccionado.URL.match(/\d+/g); // Extrae los números de fondo y clase
    setNombreFondo(fondoSeleccionado.Fondo);
    setFondo(fondoNum);
    setClase(claseNum);
  };

  return (
    <div className="consulta">
      <label htmlFor={`nombreFondo${id}`}>Nombre del Fondo:</label>
      <input
        type="text"
        id={`nombreFondo${id}`}
        name={`nombreFondo${id}`}
        value={nombreFondo}
        onChange={(e) => {
          setNombreFondo(e.target.value);
          setFiltroBusqueda(e.target.value);
        }}
        list={`fondos-lista${id}`}
        placeholder="Escribe para buscar un fondo..."
        onInput={(e) => {
          const fondoSeleccionado = listaFondos.find(f => f.Fondo === e.target.value);
          if (fondoSeleccionado) {
            seleccionarFondo(fondoSeleccionado);
          }
        }}
      />
      <datalist id={`fondos-lista${id}`}>
        {fondosFiltrados.map(fondoItem => (
          <option key={fondoItem.URL} value={fondoItem.Fondo} />
        ))}
      </datalist>
      
      <label htmlFor={`fondo${id}`}>Número de Fondo:</label>
      <input
        type="number"
        id={`fondo${id}`}
        name={`fondo${id}`}
        value={fondo}
        onChange={(e) => setFondo(e.target.value)}
      />
      <label htmlFor={`clase${id}`}>Número de Clase:</label>
      <input
        type="number"
        id={`clase${id}`}
        name={`clase${id}`}
        value={clase}
        onChange={(e) => setClase(e.target.value)}
      />
      <label htmlFor={`monto${id}`}>Monto invertido:</label>
      <input
        type="number"
        id={`monto${id}`}
        name={`monto${id}`}
        value={montoInvertido}
        onChange={(e) => setMontoInvertido(e.target.value)}
      />
      <button onClick={obtenerRendimiento}>Obtener Rendimiento</button>
      <button onClick={guardarComoFavorita}>Guardar como Favorita</button>

      <div>
        <label>Cargar favorito:</label>
        <select onChange={(e) => cargarFavorito(e.target.value)}>
          <option value="">Selecciona un favorito</option>
          {consultasFavoritas.map((favorito, index) => (
            <option key={`${favorito.fondo}-${favorito.clase}`} value={index}>
              {favorito.nombreFondo}
            </option>
          ))}
        </select>
      </div>

      <div id={`resultado${id}`}>{resultado}</div>
    </div>
  );
}

export default Consulta;
