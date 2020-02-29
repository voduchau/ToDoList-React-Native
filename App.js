import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreem from './src/screens/HomeScreen';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
