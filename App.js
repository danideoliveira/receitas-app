import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from './Home';
import PudimApp from './Pudim';
import CoxinhaApp from './Coxinha';
import EsfirraApp from './Esfirra';
import BoloApp from './Bolo';
import SobreApp from './Sobre';

const Stack = createStackNavigator();

function MeuApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Receitas" component={HomeApp} />
        <Stack.Screen name="Pudim" component={PudimApp} />
        <Stack.Screen name="Coxinha" component={CoxinhaApp} />
        <Stack.Screen name="Esfirra" component={EsfirraApp} />
        <Stack.Screen name="Bolo de Chocolate" component={BoloApp} />
        <Stack.Screen name="Sobre" component={SobreApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;
