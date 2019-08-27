import {combineReducers, createStore} from 'redux'
import {NumOp} from './reducer'

/**
 * 一个个reducer是state里的一个个属性
 * 例如下面的写法，在页面里（mapStateToProps）可以通过state.NumOp获取里面的值
 * */
const Reducers = combineReducers({NumOp})
const store = createStore(Reducers)
export default store
