'use strict';
import NavigationBar from 'react-native-navbar'
import React, { Component,} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  ProgressViewIOS,
} from 'react-native'
import Reflux from 'reflux';
import Sound from 'react-native-sound';
import {HomeActions} from './../actions';
import Heading from './Header/index';


class AgileApps extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Erton101';
    this.state = { read: false ,
                   explore: false,
                   write: false,
                   game: false,
                   english_abc: false};
  }
  _onReadPress = () => {
    playSound('read.mp3');
  }
  _onExplorePress = () => {
    playSound('explore.mp3');
  }
  _onWritePress = () => {
    playSound('write.mp3');
  }
  _onGamePress = () => {
    playSound('game.mp3');
  }
  _onEnglishABCPress = () => {
    playSound('english_abc.mp3');
  }
  goHome(){
    this.refs.navigator.popToTop();
  }
  _renderScene(route) {
    
//     switch (route.name) {
//     case 'read':
//       console.log('route name'+route.name);
// //       return <Read/>;
//     default:
//       console.error('Encountered unexpected route: ' + route.name);
//     }
//     return null;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableHighlight
            onPress={this._onExplorePress}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/explore.png')}
              />
              <Topic_Text name='Explore'/>
            </View>
          </TouchableHighlight>
          
        </View>
        
        <View style={styles.mid}>
  
          <TouchableHighlight
            onPress={this._onGamePress}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/game.png')}
              />
              <Topic_Text name='Game'/>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
            onPress={this._onEnglishABCPress}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/english_abc.png')}
              />
              <Topic_Text name='English ABC'/>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
            onPress={this._onReadPress}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/read.png')}
              />
              <Topic_Text name='Read'/>
            </View>
          </TouchableHighlight>
          
        </View>

        <View style={styles.bottom}>
          
          <TouchableHighlight
            onPress={this._onWritePress}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/write.png')}
              />
              <Topic_Text name='Write'/>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
};

// var Topic_Image = React.createClass({
//   render: function(){
//     return (
//       <Image 
//         style={styles.group_image}
//         resizeMode={"cover"}
//         source={require('../public/assest/explore.png')}
//         />
//     );
//   }
// })
var Topic_Text = React.createClass({
  render: function(){
    return (
      <Text
        style={styles.group_text}>
        {this.props.name}
      </Text>
    );
  }
})
function playSound(filename){
  var s = new Sound(filename, Sound.MAIN_BUNDLE, (e) => { //'explore.mp3'
      if (e) {
        console.log('failed to load the sound', e);
      } else {
        console.log('duration in seconds: ' + s.getDuration() +
        'number of channels: ' + s.getNumberOfChannels());
        s.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    });
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  top:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
//     backgroundColor: 'red',
  },
  mid:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
//     backgroundColor: 'blue',
  },
  bottom:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
//     backgroundColor: 'green',
  },
  image:{
    width: 200,
    height: 200,
  },
  group:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    height: 230,
  },
  group_image:{
    width: 200,
    height: 180,
  },
  group_text:{
    color: "blue",
    fontSize: 36,
    fontWeight: "200",
    fontFamily: 'Helvetica Neue',
  },
  button: {
    backgroundColor: 'white',
  },
  welcome: {
    color: 'white',
    backgroundColor: 'white',
  },
});

export default AgileApps;