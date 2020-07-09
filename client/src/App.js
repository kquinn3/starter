import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './routing/private-route';

import HomePage from './pages/home-page/home-page.component';
import LoginPage from './pages/login-page/login-page.component';
import RegisterPage from './pages/register-page/register-page.component';
import MyHomePage from './pages/my-home-page/my-home-page.component';

import Navbar from './components/navbar/navbar.component';

import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          <PrivateRoute exact path='/my/home' component={MyHomePage} />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
