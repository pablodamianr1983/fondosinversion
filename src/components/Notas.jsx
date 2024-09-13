import React from 'react';

function Notas({ notas, setNotas }) {
  return (
    <textarea 
      id="notas" 
      value={notas}
      onChange={(e) => setNotas(e.target.value)}
      placeholder="Escribe tus notas aquí..."
    />
  );
}

export default Notas;
