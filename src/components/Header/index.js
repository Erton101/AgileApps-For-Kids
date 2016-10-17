import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

import HeadingText from '../HeadingText';

class Header extends Component {
  static displayName = 'Header';
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../../../favicon.ico')} style={styles.logo}/>
        <HeadingText>ZEBRETO</HeadingText>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  logo: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});


export default Header;