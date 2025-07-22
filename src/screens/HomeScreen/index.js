import React from 'react';
import { View } from 'react-native';
import ThemedText from '../../components/ThemedText';
import ThemeToggle from '../../components/ThemeToggle';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Welcome to the Home Screen!</ThemedText>
      <ThemeToggle />
    </View>
  );
};

export default HomeScreen;