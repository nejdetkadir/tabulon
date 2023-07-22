/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { LocaleProvider } from '@app/hooks/useLocale';
import { SettingsProvider } from '@app/hooks/useSettings';
import { GameProvider } from '@app/hooks/useGame';
import Routes from '@app/routes';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <LocaleProvider>
          <SettingsProvider>
            <GameProvider>
              <NavigationContainer>
                <Routes />
              </NavigationContainer>
            </GameProvider>
          </SettingsProvider>
        </LocaleProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
