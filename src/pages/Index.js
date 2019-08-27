import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ADD, SUBTRACT, AsyncAddAction} from '../store/counter/actions'

/**
 * mapSateToProps, mapDispatchToProps 将store里相应的值传入组件的props
 * */
const mapStateToProps = (state, ownProps) => {
  return state.counter
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add(num) {
      dispatch(ADD(num))
    },
    sub(num) {
      dispatch(SUBTRACT(num))
    },
    async asyncAdd(num) {
      console.log(1111)
      await dispatch(AsyncAddAction(num))
      console.log(2222, ownProps)
    }
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  goParent() {
    this.props.history.push('/parent')
  }

  render() {
    const {number, isOnAction, add, sub, asyncAdd} = this.props
    return (
      <div>
        <div className={'text-center'}>
          demo Index
        </div>
        <div className={'text-center'}>
          <Link className={'margin-right-30'} to={'/'}>Index page</Link>
          <Link className={'margin-right-30'} to={'/parent'}> to Parent</Link>
          <button onClick={() => this.goParent()}>Go Parent</button>
        </div>
        <div className={'text-center'}>
          <button onClick={() => asyncAdd(1)}>AsyncAdd 1</button>
          <button onClick={() => add(1)}>Add 1</button>
          <button onClick={() => sub(1)}>Subtract 1</button>
          <span>number:{number}</span>
          <div className={'text-center'}>{isOnAction}</div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
