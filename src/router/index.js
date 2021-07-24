import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Awal, Login, LupaPassword} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Awal"
        component={Awal}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LupaPassword"
        component={LupaPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
