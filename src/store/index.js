import {combineReducers, createStore} from 'redux'
import {NumOp} from './reducer'

const Reducers = combineReducers({NumOp})
const store = createStore(Reducers)
export default store
