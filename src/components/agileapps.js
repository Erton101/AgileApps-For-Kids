'use strict';
import NavigationBar from 'react-native-navbar'
import React, { Component,} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ProgressViewIOS,
} from 'react-native'
import Reflux from 'reflux';
import Sound from 'react-native-sound';

import {HomeActions} from './../actions';


var Topic_Image = React.createClass({
  render: function(){
    return (
      <Image 
        style={styles.group_image}
        resizeMode={"cover"}
        source={require('../public/assest/explore.png')}
        />
    );
  }
})
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
  _onReadPressIn = () => {
    this.setState({read: true});
  }
  _onReadPressOut = () => {
   this.setState({read: false}); 
  }
  _onExplorePressIn = () => {
    this.setState({explore: true});
  }
  _onExplorePressOut = () => {
   this.setState({explore: false}); 
  }
  
  _onWritePressIn = () => {
    this.setState({write: true});
  }
  _onWritePressOut = () => {
   this.setState({write: false}); 
  }
  _onGamePressIn = () => {
    this.setState({game: true});
  }
  _onGamePressOut = () => {
   this.setState({game: false}); 
  }
  _onEnglishABCPressIn = () => {
    this.setState({english_abc: true});
  }
  _onEnglishABCPressOut = () => {
   this.setState({english_abc: false}); 
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          
          <TouchableHighlight
            onPressIn={this._onExplorePressIn}
            onPressOut={this._onExplorePressOut}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/explore.png')}
              />
              <Topic_Text name='Explore'/>
              <Text style={styles.welcome}>
                {this.state.explore ? playSound('explore.mp3') : ''}
              </Text>
            </View>
          </TouchableHighlight>
          
        </View>
        
        <View style={styles.mid}>
          
          <TouchableHighlight
            onPressIn={this._onGamePressIn}
            onPressOut={this._onGamePressOut}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/game.png')}
              />
              <Topic_Text name='Game'/>
              <Text style={styles.welcome}>
                  {this.state.game ? playSound('game.mp3') : ''}
              </Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
            onPressIn={this._onEnglishABCPressIn}
            onPressOut={this._onEnglishABCPressOut}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/english_abc.png')}
              />
              <Topic_Text name='English ABC'/>
              <Text style={styles.welcome}>
                  {this.state.english_abc ? playSound('english_abc.mp3') : ''}
              </Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
            onPressIn={this._onReadPressIn}
            onPressOut={this._onReadPressOut}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/read.png')}
              />
              <Topic_Text name='Read'/>
              <Text style={styles.welcome}>
                  {this.state.read ? playSound('read.mp3') : ''}
              </Text>
            </View>
          </TouchableHighlight>
          
        </View>

        <View style={styles.bottom}>
          
          <TouchableHighlight
            onPressIn={this._onWritePressIn}
            onPressOut={this._onWritePressOut}
            style={styles.button}>
            <View style={styles.group}>
              <Image 
                style={styles.group_image}
                resizeMode={"cover"}
                source={require('../public/assest/write.png')}
              />
              <Topic_Text name='Write'/>
              <Text style={styles.welcome}>
                  {this.state.write ? playSound('write.mp3') : ''}
              </Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
};

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

