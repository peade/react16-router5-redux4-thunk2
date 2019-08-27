import {NumberAction} from './actions'

const initState = {
  number: 0
}

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
