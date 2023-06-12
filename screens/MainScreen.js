import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

import NavBarComponent from '../components/NavBarComponent';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';
import CategoriesScreen from './CategoriesScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const DrawerScreen = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={MainScreen} />
//       <Drawer.Screen name="Categories" component={CategoriesScreen} />
//     </Drawer.Navigator>
//   );
// };

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#67B7F4',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={focused ? '#67B7F4' : 'gray'}
              />
            );
          } else if (route.name === 'Categories') {
            return (
              <Icon
                name="open-book"
                type="entypo"
                size={28}
                color={focused ? '#67B7F4' : 'gray'}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Icon
                name="shopping-bag"
                type="FontAwesome"
                size={28}
                color={focused ? '#67B7F4' : 'gray'}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />

      <Tab.Screen 
      name="Categories" 
      options={{ headerShown: false }}
      component={CategoriesScreen} 
      />

      <Tab.Screen
        name="Cart"
        options={{ tabBarBadge: 3 }}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
