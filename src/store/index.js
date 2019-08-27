import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {counter} from './counter/reducer'

const loggerMiddleware = createLogger()

/**
 * 一个个reducer是state里的一个个属性
 * 例如下面的写法，在页面里（mapStateToProps）可以通过state.NumOp获取里面的值
 * */
const Reducers = combineReducers({counter})
/**
 * 通过中间件的方式，集成redux-thunk redux-logger
 * redux-logger 在实际使用时，应该设置只在开发或测试环境中使用，不在生产环境中使用。
 * */
const store = createStore(Reducers, applyMiddleware(thunkMiddleware, loggerMiddleware))
export default store
