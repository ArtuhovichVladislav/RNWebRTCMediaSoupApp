export enum RootRoutes {
  Login = 'Login',
  JoinRoom = 'JoinRoom',
}

export type RootStackParams = {
  [RootRoutes.Login]: {};
  [RootRoutes.JoinRoom]: {};
};
