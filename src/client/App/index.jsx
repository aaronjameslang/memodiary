import CssBaseline from 'material-ui/CssBaseline'
import HashRouter from 'react-router-dom/HashRouter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import withStyles from 'material-ui/styles/withStyles'

import Header from './Header'
import Page from './Page'

export default withStyles({
  app: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  }
})(({classes}) => (
  <div className={'app ' + classes.app}>
    <CssBaseline />
    <Header />
    <HashRouter>
        <Page />
    </HashRouter>
  </div>
))
