/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Views/Start';
import InfoScreen from './Views/Info';
import Game1Screen from './Views/Game1';
import StartBtn from './Components/StartBtn';
import ConfirmationScreen from './Views/Confirmation';
import ResultScreen from './Views/Result';
import Game2Screen from './Views/Game2';
import React from 'react';
import {Node} from 'react';

const Stack = createStackNavigator();

const App = () =>{
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#2e2e2e' }
    }}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Info" component={InfoScreen}/> 
        <Stack.Screen name="Game1" component={Game1Screen}/>
        <Stack.Screen name="Game2" component={Game2Screen}/>
        <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
        <Stack.Screen name="Result" component={ResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;