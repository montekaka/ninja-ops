import React, {useState} from 'react';
import { TextArea, Button } from '@douyinfe/semi-ui';

const MessageInput = ({submitting, onSubmit}) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (x) => {
    setMessage(x)
  }

  const handleSubmit = () => {
    setMessage('')
    onSubmit(message)
  }

  return (
    <div style={{
      borderRadius: '5px',
      border: '1px solid var(--semi-color-border)',
    }}>
      <TextArea 
        autosize rows={3} 
        placeholder="Message"
        value={message}
        onChange={handleMessageChange}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '5px'
      }}>
        <Button onClick={handleSubmit}>Send</Button>
      </div>
    </div>
  )
}

export default MessageInput;