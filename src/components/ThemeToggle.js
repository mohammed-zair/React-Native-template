import { Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle({ style }) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Switch
      value={theme.isDark}
      onValueChange={toggleTheme}
      style={style}
    />
  );
}