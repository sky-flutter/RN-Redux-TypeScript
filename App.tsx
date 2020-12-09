/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CounterDemo from './src/containers/CounterDemo';
import ListPost from './src/containers/ListPost';
import { Provider } from 'react-redux';
import store from './src/store';
import MediaList from './src/store/graphql/MediaList';

declare const global: { HermesInternal: null | {} };
const Stack = createStackNavigator();
const App = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"GraphQL Request"}>
          <Stack.Screen name="Counter Demo" component={CounterDemo}></Stack.Screen>
          <Stack.Screen name="List Post" component={ListPost}></Stack.Screen>
          <Stack.Screen name="GraphQL Request" component={MediaList}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
