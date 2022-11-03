import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';

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
          name="SignUp"
          component={ SignUp }
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