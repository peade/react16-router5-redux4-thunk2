import {NumberAction} from './actions'
import {ActionStatus} from '../actionStatus'

const initState = {
  number: 0,
  isOnAction: ''
}

/*
* 设置state初始值，通过一个个操作
* reducer里返回的state是应该是完整的state，不能缺少内容
* */
export function counter(state = initState, action) {
  let {number, isOnAction} = state
  switch (action.type) {
    case NumberAction.add:
      number += action.payload
      break
    case NumberAction.sub:
      number -= action.payload
      break
    case NumberAction.asyncAdd:
      if (action.isOnAction === ActionStatus.success) {
        number += action.payload
      }
      isOnAction = action.isOnAction
      break
    default:
  }
  return Object.assign({}, state, {number, isOnAction})
}
