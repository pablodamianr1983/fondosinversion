import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function GraficoFavoritos({ consultasFavoritas }) {
  const chartRef = useRef(null); // Referencia al canvas del gráfico
  const myChartRef = useRef(null); // Referencia al gráfico Chart.js

  useEffect(() => {
    const nombresFondos = consultasFavoritas.map(c => c.nombreFondo);
    const montos = consultasFavoritas.map(c => c.monto);

    // Destruir el gráfico existente si ya existe para evitar errores
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Crear un nuevo gráfico
    myChartRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: nombresFondos,
        datasets: [{
          label: 'Monto Invertido',
          data: montos,
          backgroundColor: 'rgba(52, 183, 235, 0.5)',
          borderColor: 'rgba(52, 183, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Limpiar cuando el componente se desmonte o actualice
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [consultasFavoritas]); // Solo vuelve a renderizarse cuando consultasFavoritas cambia

  return (
    <div>
      <canvas id="graficoFavoritos" ref={chartRef}></canvas>
    </div>
  );
}

export default GraficoFavoritos;
