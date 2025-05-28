import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RTCView } from 'react-native-webrtc';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CallScreenComponent } from './types';
import { localPeerData, useWebRTC } from './hooks';
import { styles } from './styles';
import { Resources } from '../../resources';
import { CardStyleInterpolators } from '@react-navigation/stack';

export const CallScreen: CallScreenComponent = ({ navigation, route }) => {
  const { roomId } = route.params || {};

  const { localStream, remotePeers, peersData, endCall } = useWebRTC(roomId);

  const handleEndCall = useCallback(() => {
    endCall();
    navigation.goBack();
  }, [endCall, navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.remoteStreamsContainer}>
        {remotePeers.map(p => (
          <View
            key={p.peerId}
            style={
              remotePeers.length === 1
                ? styles.remoteStreamContainerLarge
                : styles.remoteStreamContainer
            }>
            <RTCView
              key={p.peerId}
              streamURL={p.stream.toURL()}
              style={styles.remoteStream}
              objectFit="cover"
            />
            <Text style={styles.peerName} numberOfLines={1}>
              {peersData[p.peerId].displayName}
            </Text>
          </View>
        ))}
      </View>

      {!remotePeers.length && (
        <View style={styles.noOneInRoomContainer}>
          <Text
            style={
              styles.noOneInRoomText
            }>{`Looks like, there is\nno one in the room :(\n\n Your room id: ${roomId}`}</Text>
        </View>
      )}

      <View style={styles.bottomContainer}>
        {localStream && (
          <View style={styles.localStreamContainer}>
            <RTCView
              streamURL={localStream.toURL()}
              style={styles.localStream}
              objectFit="cover"
            />
            <Text style={styles.peerName} numberOfLines={1}>
              {localPeerData.displayName}
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
          <Image
            style={styles.phoneCallEnd}
            source={Resources.images.phoneCallEnd()}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

CallScreen.navigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};
