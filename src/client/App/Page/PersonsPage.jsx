import Link from 'react-router-dom/Link'
import React from 'react'
import { List } from 'antd'

const data = [
  {id: 1, name: 'Heather Lamb'},
  {id: 2, name: 'Dustin Gilbert'},
  {id: 3, name: 'Mable Allison'}
]

const ListItem = ({ id, name}) => (
  <List.Item>
    <Link to={`/person/${id}/${name}`}>
      {name}
    </Link>
  </List.Item>
)

export default () => (
  <List
    bordered
    dataSource={data}
    renderItem={ListItem}
  />
)
