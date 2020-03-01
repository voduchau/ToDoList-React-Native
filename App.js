import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreem from './src/screens/HomeScreen';
import ScreenUpdate from './src/screens/ScreenUpdate';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreem"
          component={HomeScreem}
          options={{title: 'To Do'}}
        />
        <Stack.Screen
          name="ScreenUpdate"
          component={ScreenUpdate}
          options={{title: 'Update'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
