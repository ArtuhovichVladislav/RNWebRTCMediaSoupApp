import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },

  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#272757',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 500,
    textTransform: 'uppercase',
  },

  loader: {
    color: 'white',
    backgroundColor: 'white',
  },
});
