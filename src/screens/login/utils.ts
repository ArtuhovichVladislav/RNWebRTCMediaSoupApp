const MIN_USERNAME_LENGTH = 4;
const MIN_PASSWORD_LENGTH = 4;

export const isUserNameValid = (username: string) => {
  return username.length >= MIN_USERNAME_LENGTH;
};

export const isPasswordValid = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

export const USERNAME_ERROR_TEXT = `Username must be at least ${MIN_USERNAME_LENGTH} symbols length.`;
export const PASSWORD_ERROR_TEXT = `Password must be at least ${MIN_PASSWORD_LENGTH} symbols length.`;
