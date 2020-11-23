import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import{createStore, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import MainScreen from './src/screens/MainScreen';
import PizzaScreen from './src/screens/PizzaScreen';

let store = createStore(reducers, applyMiddleware(reduxThunk));

const Stack = createStackNavigator();

const route= () =>{
  <Stack.Navigator
    initialRouteName="Questionare"
  >
    <Stack.Screen
      name="Questionare"
      component={QuestionareScreen}
      options={{ title: "Kevin's Rent Calculator" }}
    />
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{ title: "Kevin's Rent Calculator" }}
    />
    <Stack.Screen
      name="Jeremy"
      component={PizzaScreen}
      options={{ title: "Jeremy's Pizza Calculator" }}
    />
  </Stack.Navigator>
}


const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Kevin's Rent Calculator" }}
        />
        <Stack.Screen
          name="Jeremy"
          component={PizzaScreen}
          options={{ title: "Jeremy's Pizza Calculator" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default () =>{
  return(
    <Provider store={store}>
      {App()}
    </Provider>
  )
};
