import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },

  input: {
    width: '100%',
    borderWidth: 1.5,
    borderRadius: 14,
    borderColor: '#272757',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'white',
  },

  errorBorder: {
    borderColor: 'red',
  },

  errorText: {
    marginTop: 4,
    left: 8,
    fontSize: 12,
    lineHeight: 14,
    color: 'red',
  },
});
