import * as Keychain from 'react-native-keychain';

const saveToken = async (token: string) => {
  await Keychain.setGenericPassword('user', token);
};

const loadToken = async (): Promise<string | null> => {
  const credentials = await Keychain.getGenericPassword();
  return credentials ? credentials.password : null;
};

const clearToken = async () => {
  await Keychain.resetGenericPassword();
};

export const TokenManager = {
  saveToken,
  loadToken,
  clearToken,
};
