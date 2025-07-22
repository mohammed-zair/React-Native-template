import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';
import ThemedText from '../../components/ThemedText';
import styles from './styles';


const IntroScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image 
        source={require('../../../assets/images/6.png')}
        style={styles.logo}
      />
      
      <ThemedText style={styles.title}>Welcome to My App</ThemedText>
      <ThemedText style={styles.subtitle}>Discover amazing features</ThemedText>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Home')}
      >
        <ThemedText style={styles.buttonText}>Get Started</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;