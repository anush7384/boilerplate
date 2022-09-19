import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import showUsers from './../store/saga/index';
import combineReducers from './reducer/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers,applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(showUsers);

export default store;
