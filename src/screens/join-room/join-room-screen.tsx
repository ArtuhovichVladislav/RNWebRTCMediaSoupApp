import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { logout } from '../../store/actions/logout';
import { setToken } from '../../store/slices/auth-slice';
import { TextInput } from '../../components/text-input';
import { Button } from '../../components/button';
import { RootRoutes } from '../../routing/routes';
import { useAppDispatch } from '../../hooks';
import { JoinRoomScreenComponent } from './types';
import { styles } from './styles';

export const JoinRoomScreen: JoinRoomScreenComponent = ({ navigation }) => {
  const [roomId, setRoomId] = useState('');
  const dispatch = useAppDispatch();

  const onRoomIdChange = (roomIdText: string) => {
    setRoomId(roomIdText);
  };

  const handleConnect = () => {
    navigation.navigate(RootRoutes.Call, { roomId });
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setToken(null));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Enter Room Id to join Video call</Text>
        <TextInput
          placeholder={'Room Id'}
          value={roomId}
          onChangeText={onRoomIdChange}
        />
        <Button title={'Connect'} onPress={handleConnect} disabled={!roomId} />
        <Button title={'Logout'} onPress={handleLogout} />
      </View>
    </View>
  );
};

JoinRoomScreen.navigationOptions = {
  headerShown: false,
};
