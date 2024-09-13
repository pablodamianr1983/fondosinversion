import React from 'react';
import Manual from './Manual';

function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
  };

  return (
    <div id="header">
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <Manual />
    </div>
  );
}

export default Header;
