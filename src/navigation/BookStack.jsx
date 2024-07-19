import { createStackNavigator } from '@react-navigation/stack';
import { Reading } from '@screens';
import React from 'react';

const Stack = createStackNavigator();

const BookStack = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      tabBarStyle: { height: 90 },
    }}
  >
    <Stack.Screen component={Reading} name="Reading" />
  </Stack.Navigator>
);

export default BookStack;
