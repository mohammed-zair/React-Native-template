import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/contexts/ThemeContext';
import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import './src/i18n/i18n';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}



// import { StyleSheet, View } from 'react-native';
// import { Button } from 'react-native-paper'; 
// import { useTranslation } from 'react-i18next';
// import ThemedText from './src/components/ThemedText';
// import ThemeToggle from './src/components/ThemeToggle';
// import { ThemeProvider } from './src/contexts/ThemeContext';
// import './src/i18n/i18n';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// export default function AppWrapper() {
//   return (
//     <SafeAreaProvider>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </SafeAreaProvider>
//   );
// }

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <View style={styles.container}>
//       <ThemedText style={styles.text}>{t('welcome')}</ThemedText>
      
//       <Button 
//         mode="contained"
//         style={styles.button}
//         onPress={() => changeLanguage('en')}
//       >
//         English
//       </Button>

//       <Button
//         mode="contained"
//         style={styles.button}
//         onPress={() => changeLanguage('ar')}
//       >
//         العربية
//       </Button>

//       <Button
//         mode="contained"
//         style={styles.button}
//         onPress={() => changeLanguage('de')}
//       >
//         Deutsch
//       </Button>

//       <ThemeToggle style={styles.themeToggle} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 30,
//     fontWeight: 'bold',
//   },
//   button: {
//     marginVertical: 10,
//     width: '100%',
//     maxWidth: 300,
//   },
//   themeToggle: {
//     marginTop: 40,
//   }
// });