import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Admin } from './Admin';
import { Results } from './Results';
import { Pleb } from './Pleb';
import { PageNotFound } from './PageNotFound';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/results" component={Results} />
            <Route path="/pleb" component={Pleb} />
            <Route component = {PageNotFound} />
          </Switch>
        </Router>
        </React.Fragment>
    );
  }
}
export default App;
