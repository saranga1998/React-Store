import { combineReducers } from 'redux';
import  cakeReduser from './Cake/cakeReduser'
import iceReducer from './IceCream/iceReducer';
import UserReducer from './User/UserReducer';

const rootReduser = combineReducers({
  cake: cakeReduser,
  ice : iceReducer,
  user : UserReducer
});

export default rootReduser;
