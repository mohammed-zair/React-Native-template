// src/components/ThemedText.js
import { Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemedText({ style, ...props }) {
  const { theme } = useTheme(); // Now properly destructured
  
  return (
    <Text 
      style={[{ color: theme.colors.text }, style]} 
      {...props} 
    />
  );
}