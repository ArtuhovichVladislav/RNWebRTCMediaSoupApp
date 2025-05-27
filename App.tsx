import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { RootStack } from './src/routing/root-stack';
import { store } from './src/store';
import { setToken } from './src/store/slices/auth-slice';
import { useAppDispatch, useAppSelector } from './src/hooks';
import { TokenManager } from './src/services/token-manager';
import { styles } from './styles';

const AppWithStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(state => state.auth);

  useEffect(() => {
    TokenManager.loadToken()
      .then(storedToken => {
        if (storedToken) {
          dispatch(setToken(storedToken));
        } else {
          dispatch(setToken(null));
        }
      })
      .catch(() => {
        dispatch(setToken(null));
      });
  }, [dispatch]);

  useEffect(() => {
    if (token !== undefined) {
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating />
      </View>
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AppWithStore />
      </Provider>
    </GestureHandlerRootView>
  );
}
