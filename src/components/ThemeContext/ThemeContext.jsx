import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('light');

  useEffect(() => {
    if (themeColor === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeColor]);

  const handleThemeSwitch = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ themeColor, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};
