import React, { Component } from 'react';
import { Image} from 'react-native';
import LandingPageText from './LandingPageText';

export default class LandingPage extends Component {
  render() {
    return (
        <Image style={{flex: 1, width: null, height: null}} source={require('../src/img/landing-page.png')}>
          <LandingPageText/>
        </Image>
    );
  }
}