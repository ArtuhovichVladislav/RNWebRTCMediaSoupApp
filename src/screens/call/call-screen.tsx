import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { RTCView } from 'react-native-webrtc';

import { Button } from '../../components/button';
import { CallScreenComponent } from './types';
import { useWebRTC } from './hooks';
import { styles } from './styles';

export const CallScreen: CallScreenComponent = ({ navigation, route }) => {
  const { roomId } = route.params || {};

  const { localStream, remotePeers, peersData, endCall } = useWebRTC(roomId);

  const handleEndCall = useCallback(() => {
    endCall();
    navigation.goBack();
  }, [endCall, navigation]);

  return (
    <View style={styles.container}>
      {localStream && (
        <RTCView
          streamURL={localStream.toURL()}
          style={{ width: 200, height: 150 }}
        />
      )}
      {remotePeers.map(p => (
        <View key={p.peerId}>
          <RTCView
            key={p.peerId}
            streamURL={p.stream.toURL()}
            style={{ width: 200, height: 150 }}
          />
          <Text>{peersData[p.peerId].displayName}</Text>
        </View>
      ))}

      {!remotePeers.length && <Text>No one in the room</Text>}

      <View style={{ position: 'absolute', bottom: 40 }}>
        <Button title="END" onPress={handleEndCall} />
      </View>
    </View>
  );
};

CallScreen.navigationOptions = {
  headerShown: false,
};
