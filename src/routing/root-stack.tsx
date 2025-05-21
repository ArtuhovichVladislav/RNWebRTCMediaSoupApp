import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootRoutes, RootStackParams } from './routes';
import { LoginScreen } from '../screens/login';
import { JoinRoomScreen } from '../screens/join-room';

const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootRoutes.Login}
        component={LoginScreen}
        options={LoginScreen.navigationOptions}
      />
      <Stack.Screen
        name={RootRoutes.JoinRoom}
        component={JoinRoomScreen}
        options={JoinRoomScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};
