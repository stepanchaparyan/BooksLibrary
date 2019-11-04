import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import { PageNotFound } from './components/PageNotFound';

class Routes extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Authors} />
            <Route exact path='/books' component={Books} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </div>
    );
  }
}

export default Routes;