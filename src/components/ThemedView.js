import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export const ThemedView = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...props}
    >
      {children}
    </View>
  );
};