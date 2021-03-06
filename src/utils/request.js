import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
// 创建axios实例
const service = axios.create({
  // baseURL: 'http://' + window.location.host+'/v1/wallet/',
  baseURL: ' http://browser.thinkium.vip/PublicChainBrowser',
  timeout: 200000 // 请求超时时间
})
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    let msg = ''
    if (error == 'Error: timeout of 200000ms exceeded') {
      msg = '无效请求！请求超时！'
    } else {
      msg = error.message
    }
    Message({
      message: msg,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
