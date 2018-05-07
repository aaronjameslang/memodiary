import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import withStyles from 'material-ui/styles/withStyles'

import HomePage from './HomePage'

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
      <Route component={HomePage} />
    </Switch>
  </div>
))
