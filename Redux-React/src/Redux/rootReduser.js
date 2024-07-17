// Redux/rootReducer.js
import { combineReducers } from 'redux';
import  cakeReduser from './Cake/cakeReduser'

const rootReduser = combineReducers({
  cake: cakeReduser
});

export default rootReduser;
