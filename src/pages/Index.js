import React from 'react'
import {Link} from 'react-router-dom'

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
    return (
      <div>
        demo Index
        <Link className={'margin-right-30'} to={'/'}>Index page</Link>
        <Link className={'margin-right-30'} to={'/parent'}> to Parent</Link>
        <button onClick={() => this.goParent()}>Go Parent</button>
        <div className={'text-center'}>
          number:{}
        </div>
      </div>
    )
  }
}

export default Index
