import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import withStyles from 'material-ui/styles/withStyles'

import PersonsPage from './PersonsPage'
import PersonPage from './PersonPage'

export default withStyles({
  page: {
    flexGrow: 1,
    flexShrink: 1,
    height: 0,
    overflow: 'auto'
  }
})(({classes}) => (
  <div className={'page ' + classes.page}>
    <Switch>
      <Route component={PersonPage} path='/person/:id/:name' />
      <Route component={PersonsPage} path='/person' />
      <Route component={PersonsPage} path='/' />
    </Switch>
  </div>
))
