import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#505081',
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 56,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },

  largeCircle: {
    position: 'absolute',
    bottom: -80,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#8686ac',
  },

  smallCircle: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#0f0e47',
  },
});
