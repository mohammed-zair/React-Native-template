// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from '../constants/theme';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create custom hook with proper validation
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 3. Enhanced provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Memoize theme object and functions
  const value = useMemo(() => {
    const toggleTheme = () => setIsDark(prev => !prev);
    
    return {
      theme: isDark ? darkTheme : lightTheme,
      isDark,
      toggleTheme, // Make sure this is included
    };
  }, [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};