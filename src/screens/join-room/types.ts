import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { RootRoutes, RootStackParams } from '../../routing/routes';

export type JoinRoomScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  RootRoutes.JoinRoom
>;

type JoinRoomScreenRouteProp = RouteProp<RootStackParams, RootRoutes.JoinRoom>;

type Props = {
  navigation: JoinRoomScreenNavigationProp;
  route: JoinRoomScreenRouteProp;
};

export type JoinRoomScreenComponent = React.FC<Props> & {
  navigationOptions: StackNavigationOptions;
};
