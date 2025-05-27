import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { RootRoutes, RootStackParams } from '../../routing/routes';

export type CallScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  RootRoutes.Call
>;

type CallScreenRouteProp = RouteProp<RootStackParams, RootRoutes.Call>;

type Props = {
  navigation: CallScreenNavigationProp;
  route: CallScreenRouteProp;
};

export type CallScreenComponent = React.FC<Props> & {
  navigationOptions: StackNavigationOptions;
};
