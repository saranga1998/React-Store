import { combineReducers } from 'redux';
import  cakeReduser from './Cake/cakeReduser'
import iceReducer from './IceCream/iceReducer';

const rootReduser = combineReducers({
  cake: cakeReduser,
  ice : iceReducer
});

export default rootReduser;
