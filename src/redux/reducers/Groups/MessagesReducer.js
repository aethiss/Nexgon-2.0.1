import { createReducer } from '../../lib/ReducerHelper'

/**
 * @schema MESSAGES
 *
 * messages: {
 *  'SOMEID': [message, message, ...],
 *  'ANOTHER': [message, message, ...],
 *  ...
 *  ...
 * }
 *
 * message: {
    __type: ['Message', 'Event', 'User_Action'],
    id: {alphanumeric},
    createdAt: new Date().toISOString(),
    body: {
      text: {string},
      // Maybe more for Events/Actions
    },
    from: {
      __type: ['User', 'Event(name)', 'Company'],
      id: {alphanumeric},
      username: {string},
    },
    to: {
      __type: 'Group',
      id: {alphanumeric},
      // Maybe More for push-notification
    }
 *
 */

const initialState = {}

const messagesReducer = createReducer(initialState, {
  GET_ALL_MESSAGES_FROM_GROUP: (currentState, { groupId }) => currentState[groupId],
  ADD_NEW_MESSAGE_TO_GROUP: (currentState, { message }) => {
    const newState = currentState
    newState[message.to.id].push(message)
    return newState
  },
  REMOVE_ALL_MESSAGE_FROM_GROUP: (currentState, { groupId }) => {
    const newState = currentState
    newState[groupId] = []
    return newState
  },
  CREATE_NEW_GROUP_MESSAGES: (currentState, { groupId }) => {
    const newState = currentState
    if (!newState[groupId]) newState[groupId] = []
    return newState
  },
  SET_ALL_GROUP_MESSAGES: (currentState, { store }) => {
    console.log(store)
    return store
  }, // DEBUG
})

export default messagesReducer
