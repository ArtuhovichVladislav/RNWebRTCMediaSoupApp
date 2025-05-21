import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { JoinRoomScreenComponent } from './types';
import { styles } from './styles';

export const JoinRoomScreen: JoinRoomScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title={'Go to Log In Screen'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

JoinRoomScreen.navigationOptions = {};
