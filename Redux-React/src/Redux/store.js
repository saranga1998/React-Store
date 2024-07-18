//import { createStore } from 'redux';
import rootReducer from './rootReduser';
import { legacy_createStore as createStore } from 'redux';


const store = createStore(rootReducer);

export default store;
