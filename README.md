- created react native app  =>  npx @react-native-community/cli init photoApp
                                yarn [to install required packages]

Heading
SearchBar
TopSearch

npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

for vector icons:
  npm install --save react-native-vector-icons
  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle") <!-- add this line in build.gradle -->
  // @ts-ignore <!-- used this to avoid that error line bellow import Icon from 'react-native-vector-icons/MaterialIcons'; -->
