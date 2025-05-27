import React, { useState } from 'react';
import { View } from 'react-native';

import { useLoginMutation } from '../../store/authApi';
import { TextInput } from '../../components/text-input';
import { Button } from '../../components/button';
import { LoginScreenComponent } from './types';
import { styles } from './styles';
import {
  isPasswordValid,
  isUserNameValid,
  USERNAME_ERROR_TEXT,
  PASSWORD_ERROR_TEXT,
} from './utils';

export const LoginScreen: LoginScreenComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [sendLogin] = useLoginMutation();

  const onUsernameChange = (text: string) => {
    setUsername(text.trim());
    if (usernameError) {
      setUsernameError(false);
    }
  };

  const onPasswordChange = (text: string) => {
    setPassword(text.trim());
    if (passwordError) {
      setPasswordError(false);
    }
  };

  const handleLogin = async () => {
    const isValidUsername = isUserNameValid(username);
    const isValidPassword = isPasswordValid(password);
    if (isValidUsername && isValidPassword) {
      setIsLoading(true);
      try {
        await sendLogin({
          username,
          password,
        }).unwrap();
      } catch {
      } finally {
        setIsLoading(false);
      }
    } else {
      setUsernameError(!isValidUsername);
      setPasswordError(!isValidPassword);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          placeholder={'Username'}
          value={username}
          onChangeText={onUsernameChange}
          error={usernameError ? USERNAME_ERROR_TEXT : undefined}
        />
        <TextInput
          placeholder={'Password'}
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry
          error={passwordError ? PASSWORD_ERROR_TEXT : undefined}
        />
        <Button title={'Sing In'} onPress={handleLogin} loading={isLoading} />
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerShown: false,
};
