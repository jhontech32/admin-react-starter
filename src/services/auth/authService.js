import request from '../../utils/request'
import { APIURL, apiAuth } from '../../utils/config'

const apiLogin = async (data) => {
  return request({
    url: `${APIURL}${apiAuth}/login`,
    auth: false,
    data,
    method: 'post'
  })
}


const apiGetMyData = async (data) => {
  return request({
    url: `${APIURL}${apiAuth}/me`,
    auth: true,
    data,
    method: 'get'
  })
}

export {
  apiLogin,
  apiGetMyData
}