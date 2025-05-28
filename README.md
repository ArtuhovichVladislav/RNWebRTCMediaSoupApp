
# Project description

This the demo project on React Native with react-native-webrtc and mediasoup integration.
For state-management it uses redux-toolkit, for navigation - react-navigation

1. On Login screen you will see fake login to receive fake token. Token stored in redux store and Keychain.
2. After Login screen there is a Join room screen, where you need to enter room id and connect to it
3. Some camera and mic permissions should be requested
4. To join this room from another device, proceed to https://v3demo.mediasoup.org/?roomId={your-room-id}
5. Maximum displayed members is 5 (you and 4 remote ones)

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

Start app using Android Studio (use fresh one to support at least Gradle 8.12, for example Meerkat Feature Drop | 2024.3.2)
If have errors while building Android, check that Gradle JDK set to 17 version (for example ms-17). In Android Studio: Settings -> Build, Execution, Deployment -> Build Tools -> Gradle -> Gradle JDK


If everything is set up correctly, you should see your new app running in the Android Emulator or your connected device.
