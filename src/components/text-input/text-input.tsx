import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

type Props = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  error?: string;
};

export const TextInput = ({
  containerStyle,
  style,
  error,
  ...inputProps
}: Props) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <RNTextInput
        style={[styles.input, !!error && styles.errorBorder, style]}
        placeholderTextColor={'white'}
        {...inputProps}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
