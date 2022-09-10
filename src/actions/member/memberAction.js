// import pagination from 'utils/pagination'
import {
  apiGet
} from '../../services/member/memberService'
import {
  FETCH_MEMBER,
  RECEIVE_MEMBER,
  SUCCESS_MEMBER,
  FAILED_MEMBER
} from '../types'

const fetch = () => {
  return {
    type: FETCH_MEMBER
  }
}

const receive = (list, meta = {}) => {
  return {
    type: RECEIVE_MEMBER,
    payload: {
      list,
      meta
    }
  }
}

const failed = (error) => {
  return {
    type: FAILED_MEMBER,
    payload: {
      error: typeof error === 'object' ? error.message : error
    }
  }
}

const success = (data) => {
  // Alert.success(data)
  return {
    type: SUCCESS_MEMBER
  }
}

const get = () => async (dispatch) => {
  try {
    dispatch(fetch())
    const response = await apiGet()
    console.log('response', response)
    if (response && response.success) {
      await dispatch(receive(response.data.rows))
    } else {
      return dispatch(failed(response.data.message))
    }
  } catch (error) {
    return dispatch(failed(error))
  }
}

export {
  get
}
