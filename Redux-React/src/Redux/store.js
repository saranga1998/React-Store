//import { createStore } from 'redux';
import rootReducer from './rootReduser';
import { legacy_createStore as createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger';


const store = createStore(rootReducer,applyMiddleware(logger));

export default store;
