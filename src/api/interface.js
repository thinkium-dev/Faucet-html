import request from '@/utils/request'

/*获取主页货币市值信息*/
export function getalltokeninfo() {
  return request({
    url: '/chain/getCoins',
    method: 'get',
    params: {}
  })
}
export function test(e) {
  return request({
    url: '/chain/sendTxToAddress',
    method: 'post',
    data:e
  })
}
