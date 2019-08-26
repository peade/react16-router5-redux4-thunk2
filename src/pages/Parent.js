import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import loadable from '@loadable/component'

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {}
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <div className={"text-center"}>This is Parent</div>
        <div className={'text-center'}>
          <Link className={"margin-right-30"} to={'/'}>To Index</Link>
          <Link className={"margin-right-30"} to={'/parent/child'}>To Child</Link>
          <button onClick={() => this.goBack()}>Go Back</button>
        </div>
        <Route exact path={'/parent/child'} component={loadable(() => import('./Child'))}/>
      </div>
    )
  }
}

export default Index
