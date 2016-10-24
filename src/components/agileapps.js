import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './home';
import Read from './read';

class AgileApps extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true}/>
          <Scene key="read" component={Read} title="Read" />
        </Scene>
      </Router>
    )
  }
}

export default AgileApps;