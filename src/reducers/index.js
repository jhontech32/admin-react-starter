import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authStore from './authStore'
import memberStore from './memberStore'

export default combineReducers({
  form: formReducer,
  authStore,
  memberStore
})
