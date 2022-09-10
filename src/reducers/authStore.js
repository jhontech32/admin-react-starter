import {
  FETCH_AUTH_LOGIN,
  RECEIVE_AUTH_LOGIN,
  RECEIVE_AUTH_USER_LOGIN,
  RECEIVE_AUTH_USER_TOKEN_LOGIN,
  AUTHENTICATED,
  LOGOUT,
  SUCCESS_AUTH_LOGIN,
  SUCCESS_AUTH_LOGOUT,
  FAILED_AUTH_LOGIN
} from '../actions/types'

const initialState = {
  loading: false,
  authorized: false,
  filter: {
    page: 1,
    pageSize: 5
  },
  list: [],
  accessToken: {},
  userData: {},
  currentItem: {},
  meta: {},
  dataSet: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_AUTH_LOGIN:
      return { ...state, loading: true }
    case RECEIVE_AUTH_LOGIN:
      return {
        ...state,
        loading: false,
        list: action.payload.list
      }
    case RECEIVE_AUTH_USER_LOGIN:
      return {
        ...state,
        loading: false,
        currentItem: action.payload.currentItem
      }
    case RECEIVE_AUTH_USER_TOKEN_LOGIN:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken
      }
    case AUTHENTICATED:
      return {
        ...state,
        authorized: true,
        userData: action.payload.data
      }
    case LOGOUT:
      return {
        ...state,
        loading: true,
        authorized: false,
        userData: {}
      }
    case SUCCESS_AUTH_LOGIN:
      return { ...state, loading: false }
    case SUCCESS_AUTH_LOGOUT:
      return { ...state, loading: false }
    case FAILED_AUTH_LOGIN:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
