import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import Auth from './redux/Auth/reducer';

const createGlobalReducer = () => (
  combineReducers({
    Auth,
    route: routerReducer,
    form: formReducer,
  })
);

export default createGlobalReducer;
