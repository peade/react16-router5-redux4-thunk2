import {ActionStatus} from '../actionStatus'

export const NumberAction = {
  add: 'ADD',
  sub: 'SUBTRACT',
  asyncAdd: 'ASYNC_ADD'
}

let delay = (millisecond) => new Promise((resolve => {
  setTimeout(resolve, millisecond)
}))

/**
 * 用函数方法创建action
 * */
export const ADD = (payload) => {
  return {
    type: NumberAction.add,
    payload
  }
}
export const SUBTRACT = (payload) => {
  return {
    type: NumberAction.sub,
    payload
  }
}

/**
 * redux-thunks的作用，是能够让action方法能返回函数，并在函数内部进行dispatch操作
 * redux文档里介绍thunks用法，有两种用法，一是分三种不用的action来处理请求的开始、成功、失败状态，
 * 另一种是用action里的status，分三种不同的值，来对应开始、成功、失败
 * 这里的例子用了第二种方法
 * */
export const AsyncAdd = (status, payload) => {
  return {
    type: NumberAction.asyncAdd,
    isOnAction: status,
    payload: payload
  }
}

export function AsyncAddAction(payload) {
  return async function (dispatch) {
    dispatch(AsyncAdd(ActionStatus.on))
    await delay(3000)
    dispatch(AsyncAdd(ActionStatus.success, payload))
  }
}
