import React from 'react';
import { Avatar } from '@douyinfe/semi-ui';
import { IconUser } from '@douyinfe/semi-icons';

const MessageAvatar = ({fromUserName, fromUserAvatar, prevUser}) => {

  if(prevUser && prevUser.fromUserName === fromUserName) {
    return null;
  } else if (fromUserAvatar) {
    return <Avatar size="small" src={fromUserAvatar}></Avatar>
  } else {
    return <Avatar size="small" color="red" ><IconUser/></Avatar>;
  }
}

export default MessageAvatar;