import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {StackNavigator} from 'react-navigation';

import store from './store';

import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

export default class App extends Component {
  render() {
      const MainNavigator = StackNavigator ({
          Main : { screen : MainScreen},
          About : { screen : AboutScreen}
      });
    return (
        <Provider store={store}>
        <MainNavigator />
      
      </Provider>
    );
  }
}