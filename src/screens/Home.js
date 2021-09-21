import React, {useEffect, useState} from 'react';
import wechat from '../apis/wechat'

const Home = () => {

  const [qrLink, setQrLink] = useState('')

  const handleGetQR = () => {
    wechat.get(`/v1/get_tmp_qr_code_url?sceneId=1000&expire=180`)
    .then((res) => {
      setQrLink(res.data.code)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Create a QR code</h1>
      <div onClick={handleGetQR}>Click</div>
      {qrLink && <img src={qrLink}/>}
    </div>
  )
}

export default Home;