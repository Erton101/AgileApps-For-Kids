'use strict';
import NavigationBar from 'react-native-navbar'
import React, { Component,} from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
import Reflux from 'reflux';
import Sound from 'react-native-sound';
import Video from 'react-native-video';

class Read extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Erton101';
    this.state = { read: false ,
                   explore: false,
                   write: false,
                   game: false,
                   english_abc: false};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Video
            repeat
            resizeMode='cover'
            source={require('../public/video/PhonicsSongABC.mp4')}
            style={styles.backgroundVideo}
          />
        </View>
        
        <View style={styles.mid}>
  
        </View>

        <View style={styles.right}>
          

        </View>
        
      </View>
    );
  }
};

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
            // Release the audio player resource
          } else {
            console.log('playback failed due to audio decoding errors');
          }
          s.release();
        });
      }
    });
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
  },
  left:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
//     backgroundColor: 'red',
  },
  mid:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
//     backgroundColor: 'blue',
  },
  right:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
//     backgroundColor: 'green',
  },
  group_text:{
    color: "blue",
    fontSize: 36,
    fontWeight: "200",
    fontFamily: 'Helvetica Neue',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});

export default Read