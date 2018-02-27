import {createStore} from 'redux';
import {category_reducer} from '../reducers/category.js';

let  store = createStore(category_reducer);

export default store;