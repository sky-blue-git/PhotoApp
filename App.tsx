import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tab_components/Home';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Home} />
        <Tab.Screen name="Create" component={Home} />
        <Tab.Screen name="Community" component={Home} />
        <Tab.Screen name="Me" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App