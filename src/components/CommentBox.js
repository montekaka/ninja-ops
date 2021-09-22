import React, {useState} from 'react';
import { Form, Button, Input} from 'antd';

const { TextArea } = Input;

const CommentBox = ({submitting, onSubmit, message, onMessageChange}) => {



  return (
    <div style={{padding: "20px"}}>
      <Form.Item>
        <TextArea rows={4} onChange={(e) => {
          onMessageChange(e.target.value);
        }} value={message} />
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