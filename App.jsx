import { AppStack } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

const App = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <AppStack />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
