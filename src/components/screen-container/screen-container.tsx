import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const ScreenContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.largeCircle} />
      <View style={styles.smallCircle} />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};
