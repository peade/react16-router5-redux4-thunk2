import React from 'react'
import {Link} from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Link to={'/parent'}>go Parent</Link>
      </div>
    )
  }
}

export default Index
