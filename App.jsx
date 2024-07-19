import { images } from '@mocks/images';
import { AppStack } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@store';
import { theme } from '@styles';
import React, { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
// import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import FastImage from 'react-native-fast-image';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

const App = () => {
  // Is needed to enable remote JS Debugging in 0.73RN
  // NativeDevSettings.setIsDebuggingRemotely(true);
  StatusBar.setBarStyle('dark-content', true);

  useEffect(() => {
    // Prefetch
    const uri = Object.values(images).map((image) => ({
      uri: Image.resolveAssetSource(image).uri,
    }));

    FastImage.preload(uri);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <StatusBar backgroundColor="white" />
            <AppStack />
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
