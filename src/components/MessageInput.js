import React, {useState} from 'react';
import { TextArea, Button } from '@douyinfe/semi-ui';

const MessageInput = ({submitting, onSubmit, message, onMessageChange}) => {
  return (
    <div style={{
      borderRadius: '5px',
      border: '1px solid var(--semi-color-border)',
    }}>
      <TextArea autosize rows={3} placeholder="Message"/>
      <div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '5px'
      }}>
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default MessageInput;