import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import Discover from './tab_components/Discover';
import RestTabScreens from './tab_components/RestTabScreens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Discover'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Discover':
                iconName = 'search';
                break;
              case 'Create':
                iconName = 'add-circle-outline';
                break;
              case 'Community':
                iconName = 'groups';
                break;
              case 'Me':
                iconName = 'account-circle';
                break;
              default:
                iconName = 'ellipse';
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#61758e',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={RestTabScreens} />
        <Tab.Screen name="Discover" component={Discover} options={{ headerShown: false }}/>
        <Tab.Screen name="Create" component={RestTabScreens} />
        <Tab.Screen name="Community" component={RestTabScreens} />
        <Tab.Screen name="Me" component={RestTabScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
