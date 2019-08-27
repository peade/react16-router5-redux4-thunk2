import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ADD, SUBTRACT} from '../store/actions'
/**
 * mapSateToProps, mapDispatchToProps 将store里相应的值传入组件的props
 * */
const mapStateToProps = (state, ownProps) => {
  return state.NumOp
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add(num) {
      dispatch(ADD(num))
    },
    sub(num) {
      dispatch(SUBTRACT(num))
    }
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {}
  }

  goParent() {
    this.props.history.push('/parent')
  }

  render() {
    const {number, add, sub} = this.props
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
          <button onClick={() => add(1)}>Add 1</button>
          <button onClick={() => sub(1)}>Subtract 1</button>
          number:{number}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
