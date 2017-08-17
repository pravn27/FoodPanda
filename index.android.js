import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TabNav from './components/Router';

export default class FoodPanda extends Component {
  render() {
    return (
      <TabNav/>
    );
  }
}

AppRegistry.registerComponent('FoodPanda', () => FoodPanda);
