import React, {useEffect, useState} from 'react';
import { Button, Image, Space } from 'antd';
import { Layout } from '@douyinfe/semi-ui';
import wechat from '../apis/wechat'

const Home = () => {
  const { Content} = Layout;
  const [qrLink, setQrLink] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGetQR = () => {
    setLoading(true)
    // wechat.get(`/v1/get_tmp_qr_code_url?sceneId=1000&expire=180`)
    wechat.get(`/v1/wecom-qr-code`)
    .then((res) => {
      console.log(res.data.code)
      setQrLink(res.data.code)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <Content className="site-layout">
      <div style={{display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center'
      }}>
        <h1>Welcome</h1>
        <Button onClick={handleGetQR} type="primary" loading={loading}>Generate a QR code</Button>
        <br/>
        {qrLink && <Image  width={400} src={qrLink}/>}
      </div>
    </Content>
  )
}

export default Home;