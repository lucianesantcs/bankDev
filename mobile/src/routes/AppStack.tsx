import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../assets/cat.png')} 
//     />
//   );
// }

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Welcome"
          component={ Welcome }
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen
          name="Login"
          component={ Login }
        />
      <Stack.Screen
          name="Home"
          component={ Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;