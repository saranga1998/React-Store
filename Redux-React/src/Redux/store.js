import {createStore} from 'redux'
import cakeReduser from './Cake/cakeReduser'

const store = createStore(cakeReduser)

export default store