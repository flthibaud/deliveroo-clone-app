## 🚀 Getting Started

 - Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before running the app
 - Install `eslint`, `prettier` and `editor config` plugins into your IDE
 - Ensure your machine has the [React Native dependencies installed](https://facebook.github.io/react-native/docs/getting-started)

```bash
# Install dependencies
yarn install && ( cd ios && pod install )
```

#### iOS

```bash
# Start in the iOS Simulator
npx react-native run-ios --simulator="iPhone 11"
```

#### Android

```bash
# Start in the Android Simulator
#  - Note: open Android Studio > Tools > AVD > Run a device
#  - Example device specs: https://medium.com/pvtl/react-native-android-development-on-mac-ef7481f65e47#d5da
npx react-native run-android
```
