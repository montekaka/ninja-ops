import React, {useState} from 'react';
import { Form, Button, Input} from 'antd';

const { TextArea } = Input;

const CommentBox = ({submitting, onSubmit}) => {

  const [message, setMessage] = useState('')
  // const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div style={{padding: "20px"}}>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={message} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={() => {
          onSubmit(message)
        }} type="primary">
          Send
        </Button>
      </Form.Item>  
    </div>
  )
}

export default CommentBox;