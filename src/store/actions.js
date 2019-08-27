export const NumberAction = {
  add: 'ADD',
  sub: 'SUBTRACT'
}

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
