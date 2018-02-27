import {createStore} from 'redux';
import {Reducer} from '../reducers/category.js';

const store = () => createStore(Reducer);

export default store;