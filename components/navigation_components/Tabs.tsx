import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import Discover from '../tab_screens/Discover';
import RestTabScreens from '../tab_screens/RestTabScreens';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
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
        tabBarBackground: () => (
          <LinearGradient
            colors={['#bac3ce', 'white', 'white']} 
            locations={[0, 0.5, 1]} 
            style={{ flex: 1 }}
          />
        ),
        tabBarActiveTintColor: '#61758e',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={RestTabScreens} />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create" component={RestTabScreens} />
      <Tab.Screen name="Community" component={RestTabScreens} />
      <Tab.Screen name="Me" component={RestTabScreens} />
    </Tab.Navigator>
  );
};

export default Tabs;


