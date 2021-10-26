import React from 'react';
import { List, message, Avatar, Spin } from 'antd';

const UserSidebar = (props) => {
  const {items, changeUser} = props;

  if(items) {
    return   <List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<div 
              onClick={() => {
                changeUser(item)
              }}
              style={{color: 'white', cursor: 'pointer'}}>{item.name}</div>}
        />
      </List.Item>
    )}
  />
  }


  return null;
}

export default UserSidebar;