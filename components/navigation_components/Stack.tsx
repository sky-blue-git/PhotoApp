import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import { RootStackParamList } from './stacktype';
import HashtagList from '../Pages/HashtagList';

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="HashtagList" component={HashtagList} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppStack;
