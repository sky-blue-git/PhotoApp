import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './components/navigation_components/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
