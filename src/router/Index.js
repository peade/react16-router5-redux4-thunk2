import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import loadable from '@loadable/component'

const IndexPage = loadable(() => import('../pages/Index.js' /* webpackChunkName: "demo.Index" */))
const ParentPage = loadable(() => import('../pages/Parent.js'))

class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={IndexPage}/>
          <Route path={'/parent'} component={ParentPage}/>
          <Route component={IndexPage}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default Index
