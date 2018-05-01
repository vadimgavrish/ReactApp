/* eslint-disable */
import {
  LOG_IN,
  LOG_OUT,
  LOGIN_IN_ATTEMPT,
} from './constants';

import store from '../../store';
import { dispatch } from 'redux';

function fetchAttempt(cred) {
  fetch('/loginAttempt', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cred)
  })
  .then(res => res.json())
  .then(res => {
    if (res === 'err') {
      store.dispatch(loginFailure());
    } else {
      store.dispatch(loginSuccess(res));
    }
  })
  .catch(err => alert(err));
}

function getAttempt() {
  fetch('/users')
    .then(res => res.json())
    .then(res => console.log('Get! ' + res))
    .catch(err => console.log(err));
}

function postAttempt() {
  fetch('/loginAttempt', {
    method: 'POST'
  })
  .then(res => res.json())
  .then(res => console.log('Post! ' + res))
  .catch(err => console.log(err))
}

export const loginSuccess = (val) => ({
  type: 'LOGIN_SUCCESS',
  payload: val,
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
});

export const login = () => ({
  type: LOG_IN,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const loginAttempt = (val) => {
  getAttempt();
  postAttempt();
  return {
    type: LOGIN_IN_ATTEMPT,
  };
}
