import { combineReducers } from 'redux';
import {searchReducers} from './searchReducer';
import {getSong} from './getSong';

const rootReducer =combineReducers({
    searchReducers:searchReducers,
    getSong:getSong});

export default rootReducer;