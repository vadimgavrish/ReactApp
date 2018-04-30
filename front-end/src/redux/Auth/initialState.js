import { fromJS } from 'immutable';

const initialState = fromJS({
  loggedIn: false,
  signingIn: false,
  error: false,
});

export default initialState;
