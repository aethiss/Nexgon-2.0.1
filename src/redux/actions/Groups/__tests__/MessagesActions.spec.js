/* eslint-disable no-undef */

import * as action from '../MessagesActions'

const snapshot = msgAction => expect(msgAction).toMatchSnapshot()

const dispatch = jest.fn()
const getState = jest.fn()

const newMsg = {
  _type: 'Message',
  // id: 'AAAAAA3333',
  // createdAt: new Date().toISOString(),
  body: {
    text: 'Dite Amici ed entrate !!',
  },
  from: {
    _type: 'User',
    id: 'TTRREE55AAAA',
    userName: 'DbPass',
  },
  to: {
    _type: 'Group',
    id: 'ABCDE123435',
  },
}

describe('@Messages Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('GET all messages action', () => {
    const thunk = action.getAllMessagesHandler('44456DDDCCF')
    // dispatch.mockImplementation(() => Promise.resolve())
    thunk(dispatch, getState)
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'GET_ALL_MESSAGES_FROM_GROUP',
      groupId: '44456DDDCCF',
    })
  })
  it('Add new message action', () => {
    const thunk = action.addMessageHandler(newMsg)
    dispatch.mockImplementation(() => Promise.resolve())
    thunk(dispatch, getState)
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'ADD_NEW_MESSAGE_TO_GROUP',
      message: newMsg,
    })
  })
  it('expect trow a error if msg schema is not validated', () => {
    const wrongMsg = newMsg
    // eslint-disable-next-line no-underscore-dangle
    wrongMsg._type = 1234
    const thunk = action.addMessageHandler(wrongMsg)
    thunk(dispatch)
  })
  it('REMOVE : all messages from group', () => {
    snapshot(action.removeAllMessages('44455'))
  })
  it('CREATE : new Messages Group', () => {
    snapshot(action.createNewGroupMessages('44455'))
  })
  // DEBUG
  xit('SET : Messages Group', () => {
    expect(action.setGroupMessages([...newMsg])).toMatchSnapshot()
  })
})
