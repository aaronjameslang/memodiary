import Button from 'material-ui/Button'
import React from 'react'
import withStyles from 'material-ui/styles/withStyles'

export default withStyles({
  space: {
    margin: '1em'
  }
})(() => (
  <div>
    <Button variant='raised' >
      Medical
    </Button>
    <Button variant='raised' >
      Contacts
    </Button>
    <Button variant='raised' >
      Updates
    </Button>
    <Button variant='raised' >
      Calendar
    </Button>
  </div>
))
