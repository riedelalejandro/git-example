import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import MainContainer from './components/mainContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainContainer />;
  }
}

export default hot(module)(App);
