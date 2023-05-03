import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/credentialScreens/LoginScreen';
import SignupScreen from './screens/credentialScreens/SignupScreen';
import MainScreen from './screens/MainScreen';
import ForgotPasswordScreen from './screens/credentialScreens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/credentialScreens/ResetPasswordScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="EveryBook" 
        component={EntryScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        options={{headerShown: false}}
        name="SignupScreen" 
        component={SignupScreen} 
        />

        <Stack.Screen 
        options={{headerShown: false}}
        name="MainScreen" 
        component={MainScreen} 
        />

        <Stack.Screen 
        name="ForgotPasswordScreen" 
        options={{headerShown: false}}
        component={ForgotPasswordScreen} 
        />

        <Stack.Screen 
        name="ResetPasswordScreen" 
        options={{headerShown: false}}
        component={ResetPasswordScreen} 
        />

        <Stack.Screen name='DetailScreen' 
        options={{ headerShown: false }} 
        component={DetailScreen}/>


      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

