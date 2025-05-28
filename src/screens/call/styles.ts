import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const containerPadding = 20;
const streamsGap = 8;
const streamSize = (screenWidth - 2 * containerPadding - streamsGap) / 2 - 2;

const maxStreamHeight = streamSize * 2 + streamsGap;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: containerPadding,
    paddingTop: 40,
    backgroundColor: 'black',
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 56,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },

  remoteStreamsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: streamsGap,
    justifyContent: 'center',
  },

  remoteStreamContainerLarge: {
    width: maxStreamHeight,
    height: maxStreamHeight,
    borderRadius: 20,
    overflow: 'hidden',
  },

  remoteStreamContainer: {
    width: streamSize,
    height: streamSize,
    borderRadius: 20,
    overflow: 'hidden',
  },

  remoteStream: {
    width: '100%',
    height: '100%',
  },

  peerName: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    color: 'white',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },

  localStreamContainer: {
    width: streamSize,
    height: streamSize,
    borderRadius: 20,
    overflow: 'hidden',
  },

  localStream: {
    width: '100%',
    height: '100%',
  },

  endCallButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#c70000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneCallEnd: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },

  noOneInRoomContainer: {
    height: maxStreamHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noOneInRoomText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});
