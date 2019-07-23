import { createStore, combineReducers } from 'redux';
import info from './reducers/info';

const rootReducer = combineReducers({ info });

const store = createStore(rootReducer);

export default store;
