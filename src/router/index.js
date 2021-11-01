import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../home';
import MyInformation from '../myInformation';

const RootNavigator = () => {
  React.useEffect(() => {});
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="首页"
          component={Home}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings" color={'red'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="我的"
          component={MyInformation}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings" color={'black'} size={26} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
