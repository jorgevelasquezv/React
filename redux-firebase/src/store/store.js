import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';

const reducer = combineReducers({ auth: authReducer });

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
