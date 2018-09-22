import uid from 'uid-safe'
import { _setStorageItem } from '../../../libs/Storage/AsyncStorage'
import { createNewGroupMessages } from './MessagesActions'

function deleteGroup(group) {
  return {
    type: 'REMOVE_GROUP',
    group,
  }
}

export function addGroup(group) {
  return {
    type: 'ADD_GROUP',
    group,
  }
}


// ====== HANDLERS ======= //

export function createNewGroup(data) {
  return (dispatch, getState) => {
    let error = false

    // validate group object
    // eslint-disable-next-line array-callback-return
    Object.keys(data).map((key) => {
      if (data[key] === undefined || data[key] === '') {
        // TODO: Dispatch global errors
        error = { error: `Group Not Valid : ${key}` }
      }
    })

    if (!error) {
      const newGroup = {
        notification: 0,
        groupId: uid.sync(18),
        created_at: Date.now(),
        ...data,
      }
      dispatch(addGroup(newGroup))
      _setStorageItem('groups', getState().groups)

      // Creiamo una chat vuota e salviamo nel local store (TODO: da sistemare)
      dispatch(createNewGroupMessages(newGroup.groupId))
      _setStorageItem('messages', getState().messages)

      return { result: 'group created' }
    }
    return error
  }
}

export function removeGroup(group) {
  return (dispatch, getState) => {
    dispatch(deleteGroup(group))
    _setStorageItem('groups', getState().groups)
    // TODO: remove/update messages group
  }
}
