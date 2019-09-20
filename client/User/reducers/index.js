import { combineReducers } from 'redux';

import post from './Post';

export default combineReducers(Object.assign({}, { post }));
