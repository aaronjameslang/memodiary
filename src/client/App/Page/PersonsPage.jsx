import React from 'react'
import { List } from 'antd';

const data = [
  'Heather Lamb',
  'Dustin Gilbert',
  'Mable Allison',
]

export default () => (
  <List
    bordered
    dataSource={data}
    renderItem={name => <List.Item>{name}</List.Item>}
  />
)