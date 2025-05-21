import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { RootRoutes } from '../../routing/routes';
import { LoginScreenComponent } from './types';
import { styles } from './styles';

export const LoginScreen: LoginScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title={'Go to Join Room Screen'}
        onPress={() => navigation.navigate(RootRoutes.JoinRoom, {})}
      />
    </View>
  );
};

LoginScreen.navigationOptions = {};
