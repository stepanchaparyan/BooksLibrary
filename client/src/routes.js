import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';

class Routes extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Authors} />
            {/* <Route path='/signin' component={SignIn} /> */}
            {/* <Route path='/signup' component={SignUp} /> */}
            {/* <Route path='/forgotPassword' component={ForgotPassword} /> */}
            <Route exact path='/books' component={Books} />
            {/* <Route path='*' component={PageNotFound} /> */}
          </Switch>
        </div>
    );
  }
}

export default Routes;