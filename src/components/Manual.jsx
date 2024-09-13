import React from 'react';

function Manual() {
  const mostrarManual = () => {
    const instrucciones = `
      <html>
      <head>
        <style>
          body {
            font-family: "Courier New", Courier, monospace;
            background-color: #000000;
            color: #00ff00;
            padding: 20px;
            text-shadow: 0 0 8px #00ff00;
            margin: 0;
          }
          h2, h3 {
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 10px;
            color: #00ff00;
            text-shadow: 0 0 8px #00ff00;
          }
          p, ol, ul, li, pre {
            color: #00ff00;
            margin-bottom: 10px;
          }
          pre {
            background-color: #111111;
            padding: 10px;
            border: 1px solid #00ff00;
          }
          a {
            color: #00ff00;
            text-decoration: underline;
          }
          a:hover {
            color: #008000;
          }
          button {
            background-color: #008000;
            color: #00ff00;
            border: 1px solid #00ff00;
            padding: 10px;
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            display: block;
            margin: 20px auto;
            text-shadow: none;
          }
          button:hover {
            background-color: #00ff00;
            color: #000000;
            box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
          }
        </style>
      </head>
      <body>
        <h2>Manual de uso de la herramienta de consulta de rendimientos de fondos</h2>
        <p>Esta herramienta te permite consultar los rendimientos diarios de fondos de inversión de Argentina, obtener un total de tus rendimientos y guardar tus consultas favoritas para un acceso rápido.</p>
        <h3>Cómo obtener los datos del fondo:</h3>
        <ol>
          <li>Visita la página de CAFCI: <a href="https://www.cafci.org.ar/ficha-fondo.html" target="_blank">https://www.cafci.org.ar/ficha-fondo.html</a></li>
          <li>Busca el fondo que te interesa. Puedes utilizar los filtros o la barra de búsqueda.</li>
          <li>En la URL de la página del fondo, encontrarás dos números separados por punto y coma (;). Por ejemplo:</li>
          <pre>https://www.cafci.org.ar/ficha-fondo.html?q=473;931</pre>
          <li>El primer número (473 en este ejemplo) es el <b>Número de Fondo</b>.</li>
          <li>El segundo número (931 en este ejemplo) es el <b>Número de Clase</b>.</li>
        </ol>
        <h3>Cómo utilizar la herramienta:</h3>
        <ol>
          <li><b>Agregar una consulta:</b></li>
          <ul>
            <li>Haz clic en el botón "Agregar Consulta".</li>
            <li>Completa los campos:</li>
            <ul>
              <li><b>Nombre del Fondo:</b> Escribe el nombre del fondo (opcional).</li>
              <li><b>Número de Fondo:</b> Ingresa el número de fondo obtenido de la página de CAFCI.</li>
              <li><b>Número de Clase:</b> Ingresa el número de clase obtenido de la página de CAFCI.</li>
              <li><b>Monto invertido:</b> Ingresa el monto que tienes invertido en ese fondo.</li>
            </ul>
            <li>Haz clic en "Obtener Rendimiento" para consultar el rendimiento diario.</li>
          </ul>
          <li><b>Guardar como favorita:</b></li>
          <ul>
            <li>Si quieres guardar la consulta para acceder a ella más tarde, haz clic en "Guardar como Favorita".</li>
          </ul>
          <li><b>Cargar consultas favoritas:</b></li>
          <ul>
            <li>Haz clic en el botón "Cargar Favoritas" para mostrar tus consultas guardadas.</li>
          </ul>
          <li><b>Borrar favoritos:</b></li>
          <ul>
            <li>Haz clic en el botón "Borrar Favoritos" para eliminar todas las consultas guardadas.</li>
          </ul>
          <li><b>Ver gráfico de favoritos:</b></li>
          <ul>
            <li>Haz clic en el botón "Ver Gráfico de Favoritos" para visualizar un gráfico de barras con la composición de tus consultas favoritas.</li>
          </ul>
          <li><b>Agregar notas:</b></li>
          <ul>
            <li>Escribe tus notas en el área de texto debajo del botón "Ver Gráfico de Favoritos".</li>
            <li>Haz clic en "Guardar Notas" para guardarlas.</li>
          </ul>
          <li><b>Guardar resultados:</b></li>
          <ul>
            <li>Haz clic en el botón "Guardar Resultados" para descargar un archivo de texto con los resultados de todas las consultas.</li>
          </ul>
          <li><b>Contraer/Expandir:</b></li>
          <ul>
            <li>Utiliza los botones "Contraer/Expandir Consultas" y "Contraer/Expandir Favoritos" para mostrar u ocultar las secciones correspondientes.</li>
          </ul>
          <li><b>Cambiar tema:</b></li>
          <ul>
            <li>Haz clic en el botón "Cambiar Tema" para alternar entre el tema claro y oscuro.</li>
          </ul>
        </ol>
        <h3>Actualización automática:</h3>
        <p>La herramienta se actualizará automáticamente a las 21:02 cada día para obtener los rendimientos más recientes.</p>
        <h3>Importante:</h3>
        <ul>
          <li>Asegúrate de ingresar los datos correctos del fondo (número de fondo y número de clase) para obtener resultados precisos.</li>
          <li>La herramienta utiliza la API de CAFCI para obtener los datos. Si la API no está disponible o hay algún problema con los datos, es posible que no se puedan obtener los rendimientos.</li>
        </ul>
        <button onclick="window.close()">Cerrar Manual</button>
      </body>
      </html>
    `;

    const ventanaManual = window.open('', 'Manual de Uso', 'width=800,height=600');
    ventanaManual.document.write(instrucciones);
    ventanaManual.document.close();  // Necesario para cargar correctamente el contenido
  };

  return (
    <button onClick={mostrarManual}>Manual de Uso</button>
  );
}

export default Manual;
