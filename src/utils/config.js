const {
  REACT_APP_API_DEBUG,
  REACT_APP_API_PROTOCOL,
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_API_VERSION,

  REACT_APP_IMAGE_PROTOCOL,
  REACT_APP_IMAGE_HOST,
  REACT_APP_IMAGE_PORT,
  REACT_APP_IMAGE_VERSION
} = process.env

console.log('API PROTOVOLO', REACT_APP_API_PROTOCOL)

export const debug = REACT_APP_API_DEBUG

export const APIPROTOCOL = REACT_APP_API_PROTOCOL
export const APIHOST = REACT_APP_API_HOST
export const APIPORT = REACT_APP_API_PORT
export const APIVERSION = REACT_APP_API_VERSION

export const APIURL = `${APIPROTOCOL}://${APIHOST}:${APIPORT}${APIVERSION}`
// export const APIURL = `${APIPROTOCOL}://${APIHOST}`
export const APIURLNOVERSION = `${APIPROTOCOL}://${APIHOST}${REACT_APP_API_PORT}`

export const IMAGEPROTOCOL = REACT_APP_IMAGE_PROTOCOL
export const IMAGEHOST = REACT_APP_IMAGE_HOST
export const IMAGEPORT = REACT_APP_IMAGE_PORT
export const IMAGEVERSION = REACT_APP_IMAGE_VERSION
export const IMAGEURL = `${REACT_APP_IMAGE_PROTOCOL}://${REACT_APP_IMAGE_HOST}:${REACT_APP_IMAGE_PORT}${IMAGEVERSION}`

export const apiAuth = '/auth'
export const apiMember = '/member'

export const optionsImage = {
  title: 'Select Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
