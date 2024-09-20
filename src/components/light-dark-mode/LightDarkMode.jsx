import React from 'react';
import './styles.css';
import { UseLocalStorage } from './UseLocalStorage';

export const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className='light-dark-mode'>
      <div className='container'>
        <h1>Light and Dark Mode</h1>
        <button onClick={handleToggleTheme}>
          Change To {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </div>
  );
};
