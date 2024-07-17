import { BottomTabIndicator } from '@atoms';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Achievements, Discover, Library, Profile } from '@screens';
import { theme } from '@styles';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="Discover"
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      tabBarStyle: {
        borderTopColor: theme.colors.whisper,
        borderTopWidth: '1px',
      },
    }}
  >
    <Tab.Screen
      component={Library}
      name="Library"
      options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabIndicator
            indicatorVariant="library"
            isIndicatorFocused={focused}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      component={Discover}
      name="Discover"
      options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabIndicator
            indicatorVariant="discover"
            isIndicatorFocused={focused}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      component={Achievements}
      name="Achievements"
      options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabIndicator
            indicatorVariant="achievement"
            isIndicatorFocused={focused}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      component={Profile}
      name="Profile"
      options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabIndicator
            indicatorVariant="profile"
            isIndicatorFocused={focused}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
