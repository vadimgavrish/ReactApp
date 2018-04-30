/* eslint-disable */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store from './store';
import { history } from './store';

import Admin from './containers/Admin';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';

const isLoggedIn = () => store.getState().Auth._root.entries[0][1];
const redirectPath = (props) => props.match.url.substring(6);

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route 
        exact path="/admin"
        render={() => (
          isLoggedIn() ? (
            <Admin />
          ) : (
            <Redirect to="/login/admin" />
          )
        )} 
      />
      <Route
        exact path="/login(|/.*)"
        render={(props) => (
          isLoggedIn() ? (
            <Redirect to={redirectPath(props)} />
          ) : (
            <Login path={redirectPath(props)} />
          )
        )}
      />
      <Route
        exact path="/*"
        render={() => (
          isLoggedIn() ? (
            <Dashboard />
          ) : (
            <Redirect to="/login" />
          )
        )} 
      />
    </Switch>
  </ConnectedRouter>
);

export default routes;
