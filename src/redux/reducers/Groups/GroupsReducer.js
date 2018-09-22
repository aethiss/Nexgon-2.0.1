import { createReducer } from '../../lib/ReducerHelper'

/**
 * @schema GROUP
 *
 * {
 *  @groupId {alphanumeric - min 18}
 *  @name {string - max 64}
 *  @visible {bool}
 *  @inviteOnly {bool}
 *  @notification {integer}
 *  @create_at {date}
 * }
 *
 */

const initialState = []

const groupReducer = createReducer(initialState, {
  ADD_GROUP: (currentState, { group }) => [...currentState, group],
  REMOVE_GROUP: (currentState, { group }) => {
    const newList = currentState.filter(item => item.groupId !== group.groupId)
    return [...newList]
  },
  // UPDATE_GROUP: (currentState, action) => currentState, // TODO
  // ADD_USER_TO_GROUP: (currentState, action) => currentState, // TODO
  // REMOVE_USER_FROM_GROUP: (currentState, action) => currentState // TODO
})

export default groupReducer
