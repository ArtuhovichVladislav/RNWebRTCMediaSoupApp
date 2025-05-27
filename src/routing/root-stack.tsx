import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootRoutes, RootStackParams } from './routes';
import { LoginScreen } from '../screens/login';
import { JoinRoomScreen } from '../screens/join-room';
import { useAppSelector } from '../hooks';
import { CallScreen } from '../screens/call/call-screen';

const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { token } = useAppSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            name={RootRoutes.JoinRoom}
            component={JoinRoomScreen}
            options={JoinRoomScreen.navigationOptions}
          />
          <Stack.Screen
            name={RootRoutes.Call}
            component={CallScreen}
            options={CallScreen.navigationOptions}
          />
        </>
      ) : (
        <Stack.Screen
          name={RootRoutes.Login}
          component={LoginScreen}
          options={LoginScreen.navigationOptions}
        />
      )}
    </Stack.Navigator>
  );
};
