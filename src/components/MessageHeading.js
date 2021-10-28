import React from 'react';
import { Typography } from '@douyinfe/semi-ui';

const MessageHeading = ({fromUserName, prevUser}) => {
  const { Text } = Typography;

  if(prevUser && prevUser.fromUserName === fromUserName) {
    return null;
  } else {
    return <Text style={{fontWeight: 'bold'}}>{fromUserName}</Text>
  }
}

export default MessageHeading;