import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import MainContainer from './components/mainContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  simulation = () => <MainContainer />;

  home = () => <Home />;

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={this.home} />
              <Route exact path="/simulation" component={this.simulation} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
