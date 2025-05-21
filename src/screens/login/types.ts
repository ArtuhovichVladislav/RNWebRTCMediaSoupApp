import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { RootRoutes, RootStackParams } from '../../routing/routes';

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  RootRoutes.Login
>;

type LoginScreenRouteProp = RouteProp<RootStackParams, RootRoutes.Login>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

export type LoginScreenComponent = React.FC<Props> & {
  navigationOptions: StackNavigationOptions;
};
