import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BookStack from './BookStack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="BottomTab"
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Stack.Screen component={BottomTab} name="BottomTab" />
    <Stack.Screen component={BookStack} name="BookStack" />
  </Stack.Navigator>
);
export default AppStack;
