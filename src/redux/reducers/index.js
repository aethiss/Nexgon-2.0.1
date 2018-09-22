import { combineReducers } from 'redux'

import auth from './auth/AuthReducer'
import device from './device/DeviceReducer'
import groups from './Groups/GroupsReducer'
import messages from './Groups/MessagesReducer'

export default combineReducers({
  auth,
  device,
  groups,
  messages,
})
