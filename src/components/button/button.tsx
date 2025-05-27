import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  loading,
  disabled,
  style,
  ...buttonProps
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled || loading}
      {...buttonProps}>
      {!loading && <Text style={styles.buttonText}>{title}</Text>}
      {loading && <ActivityIndicator color="white" animating />}
    </TouchableOpacity>
  );
};
