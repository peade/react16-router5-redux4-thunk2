import {NumberAction} from './actions'

const initState = {
  number: 0
}
/*
* 设置state初始值，通过一个个操作
* reducer里返回的state是应该是完整的state，不能缺少内容
* */
export function NumOp(state = initState, action) {
  let {number} = state
  switch (action.type) {
    case NumberAction.add:
      number += action.payload
      break
    case NumberAction.sub:
      number -= action.payload
      break
    default:
  }
  return Object.assign({}, state, {number})
}
