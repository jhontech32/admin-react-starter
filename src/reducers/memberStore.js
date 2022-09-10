import {
  FETCH_MEMBER,
  RECEIVE_MEMBER,
  SUCCESS_MEMBER,
  FAILED_MEMBER
} from '../actions/types'

const initialState = {
  loading: false,
  filter: {
    page: 1,
    pageSize: 10
  },
  meta: {},
  dataSet: [],
  list: [],
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        ...state,
        loading: true
      }
    case SUCCESS_MEMBER:
      return {
        ...state,
        loading: false
      }
    case RECEIVE_MEMBER: {
      return {
        ...state,
        loading: false,
        list: action.payload.list
      }
    }
    case FAILED_MEMBER:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
