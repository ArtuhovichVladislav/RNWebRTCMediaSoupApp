export enum RootRoutes {
  Login = 'Login',
  JoinRoom = 'JoinRoom',
  Call = 'Call',
}

export type RootStackParams = {
  [RootRoutes.Login]: {};
  [RootRoutes.JoinRoom]: {};
  [RootRoutes.Call]: { roomId: string };
};
