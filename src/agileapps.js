import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

class AgileApps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }
  render() {

    return (
      // 上面
      <View style={styles.top}>
        <View style={styles.explore}>
          <Text style={styles.word}>Explore</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5FFCFF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  mid:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00FF00',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  bottom:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FF0000',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  explore:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  read:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  center:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  wirte:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  math:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  game:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  word:{
    borderColor: '#AA0099',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  }
}
});

export default AgileApps;

