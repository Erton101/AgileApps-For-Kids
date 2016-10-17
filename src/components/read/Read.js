import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

class Read extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          My Text
        </Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
});

export default Deck;
