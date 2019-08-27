export const NumberAction = {
  add: 'ADD',
  sub: 'SUBTRACT'
}
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
