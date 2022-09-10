import request from '../../utils/request'
import { APIURL, apiMember } from '../../utils/config'

const apiGet = async (data) => {
  return request({
    url: `${APIURL}${apiMember}?type=all`,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  apiGet
}
