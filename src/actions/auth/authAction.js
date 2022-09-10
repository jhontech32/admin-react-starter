// import pagination from 'utils/pagination'
import { Success, Error } from '../../utils/alert'
import {
  apiLogin,
  apiGetMyData
} from '../../services/auth/authService'
import { set, remove } from '../../utils/storage'
import {
  FETCH_AUTH_LOGIN,
  RECEIVE_AUTH_LOGIN,
  RECEIVE_AUTH_USER_TOKEN_LOGIN,
  AUTHENTICATED,
  LOGOUT,
  SUCCESS_AUTH_LOGIN,
  SUCCESS_AUTH_LOGOUT,
  FAILED_AUTH_LOGIN
} from '../types'

const fetch = () => {
  return {
    type: FETCH_AUTH_LOGIN
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_AUTH_LOGIN,
    payload: {
      list,
      meta
    }
  }
}

const receiveToken = (accessToken) => {
  return {
    type: RECEIVE_AUTH_USER_TOKEN_LOGIN,
    payload: {
      accessToken
    }
  }
}

const failed = (error) => {
  Error(error)
  return {
    type: FAILED_AUTH_LOGIN,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const success = (data) => {
  Success(data)
  return {
    type: SUCCESS_AUTH_LOGIN
  }
}

const authenticated = (data) => {
  return {
    type: AUTHENTICATED,
    payload: {
      data
    }
  }
}

const logOut = () => {
  return {
    type: LOGOUT
  }
}

const logoutAlert = (data) => {
  Error(data)
  return {
    type: SUCCESS_AUTH_LOGOUT
  }
}

const submit = (data) => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiLogin(data)
    console.log('response', response)
    if (response && response.success) {
      dispatch(success(response.meta.message))
      if (
        response
        && response.data
        && response.data.token
      ) {
        await set('userToken', JSON.stringify(response.data.token))
        dispatch(authenticated(response.data))
        return window.location.href = '/dashboard'
      }
    } else {
      return dispatch(failed(response.data.message))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

const me = () => async (dispatch) => {
  try {
    const response = await apiGetMyData()
    console.log('response update auth', response)
    if (response && response.success) {
      dispatch(authenticated(response.data))
      dispatch(receive(response.data))
    } else {
      return dispatch(failed(response.data.message))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

const logout = () => async (dispatch) => {
  try {
    dispatch(fetch())
    dispatch(receive({}))
    dispatch(receiveToken(''))
    dispatch(logOut())
    dispatch(logoutAlert({ message: 'See you soon ...' }))
    await remove('userToken')
    return window.location.href = '/'
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  submit,
  me,
  logout,
  receiveToken
}
