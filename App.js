import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainerr from './navigation/NavigationContainerr';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import homeReducer from './redux/homeReducer';
import cartReducer from './redux/cartReducer';
import OrderReducer from './redux/OrderReducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  products: homeReducer,
  cart: cartReducer,
  order: OrderReducer
})
const store = createStore(rootReducer)
const App = () => {
  return (
    <NavigationContainerr />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
