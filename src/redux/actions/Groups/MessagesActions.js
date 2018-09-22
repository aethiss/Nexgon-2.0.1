/* eslint-disable no-param-reassign */
import Joi from 'react-native-joi'
import uid from 'uid-safe'

// TODO
// import * as loaderActions from '../Loader/LoaderActions'

export function getAllMessages(groupId) {
  return {
    type: 'GET_ALL_MESSAGES_FROM_GROUP',
    groupId,
  }
}

export function addMessage(message) {
  return {
    type: 'ADD_NEW_MESSAGE_TO_GROUP',
    message,
  }
}

export function removeAllMessages(groupId) {
  return {
    type: 'REMOVE_ALL_MESSAGE_FROM_GROUP',
    groupId,
  }
}

export function createNewGroupMessages(groupId) {
  return {
    type: 'CREATE_NEW_GROUP_MESSAGES',
    groupId,
  }
}

// DEBUG
export function setGroupMessages(store) {
  return {
    type: 'SET_ALL_GROUP_MESSAGES',
    store,
  }
}


// ====== HANDLERS ======= //

export function getAllMessagesHandler(groupId) {
  return (dispatch) => {
    dispatch(getAllMessages(groupId))
  }
}

const messageschema = {
  _type: Joi.string().insensitive(),
  id: Joi.string(),
  createdAt: Joi.string().isoDate(),
  body: {
    text: Joi.string().insensitive(),
  },
  from: {
    _type: Joi.string().insensitive(),
    id: Joi.string(),
    userName: Joi.string().insensitive(),
    userPicture: Joi.string().insensitive(),
  },
  to: {
    _type: 'Group',
    id: Joi.string().alphanum(),
  },
}

export function addMessageHandler(message) {
  return (dispatch) => {
    // dispatch(loaderActions.startLoadingAction())
    message.id = uid.sync(18)
    message.createdAt = new Date().toISOString()
    Joi.validate(message, messageschema, (err) => {
      // dispatch(loaderActions.stopLoadingAction())
      if (err) return (new Error('Error')) // TODO: error logic after validation
      return dispatch(addMessage(message))
    })
  }
}
