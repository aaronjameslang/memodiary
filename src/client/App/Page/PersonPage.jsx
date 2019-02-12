import React from 'react'
import Link from 'react-router-dom/Link'
import Breadcrumb from 'antd/es/breadcrumb'
import Button from 'antd/es/button'

const style = {
  width: '40%',
  margin: '5%'
}

export default ({ match: { params: { id, name } } }) => (
  <React.Fragment>
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to='/'>MemoDiary</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`/person/${id}`}>{name}</Link>
      </Breadcrumb.Item>
    </Breadcrumb>

    <Button style={style} href={`#/person/${id}/medical`} size='large' icon='heart-o'>Medical</Button>
    <Button style={style} href={`#/person/${id}/contact`} size='large' icon='contacts'>Contact</Button>
    <Button style={style} href={`#/person/${id}/update`} size='large' icon='mail'>Updates</Button>
    <Button style={style} href={`#/person/${id}/calendar`} size='large' icon='calendar'>Calendar</Button>
  </React.Fragment>
)
