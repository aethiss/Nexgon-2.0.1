/* eslint-disable no-undef */
import messagesReducer from '../MessagesReducer'

const initialFakeState = {
  ABCDE123435: [
    {
      _type: 'Message',
      id: 'GHJJYYF7654343',
      createdAt: new Date().toISOString(),
      body: {
        text: 'Ciao Amici',
      },
      from: {
        _type: 'User',
        id: 'TTRREE555FGG',
        userName: 'Aethiss',
      },
      to: {
        _type: 'Group',
        id: 'ABCDE123435',
      },
    },
    {
      _type: 'Message',
      id: 'GHJJAAAAA654343',
      createdAt: new Date().toISOString(),
      body: {
        text: 'Ciao Stronzo !',
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
    },
  ],
}

describe('@Messages Reducer', () => {
  it('GET - Get all messages from group', () => {
    const testReducer = messagesReducer(
      initialFakeState,
      {
        type: 'GET_ALL_MESSAGES_FROM_GROUP',
        groupId: 'ABCDE123435',
      },
    )
    expect(testReducer.length).toBe(2)
  })
  it('ADD - Add new message from group', () => {
    const newMsg = {
      _type: 'Message',
      id: 'GHJJA44443AA654343',
      createdAt: new Date().toISOString(),
      body: {
        text: 'Porkamadonna !',
      },
      from: {
        _type: 'User',
        id: 'TTRREE55AAAA',
        userName: 'DbPass',
        userPicture: 'c://home/ios',
      },
      to: {
        _type: 'Group',
        id: 'ABCDE123435',
      },
    }
    const testReducer = messagesReducer(
      initialFakeState,
      {
        type: 'ADD_NEW_MESSAGE_TO_GROUP',
        message: newMsg,
      },
    )
    expect(testReducer.ABCDE123435.length).toBe(3)
  })
  it('Remove All messages from group (Group Delete ??)', () => {
    const testReducer = messagesReducer(
      initialFakeState,
      {
        type: 'REMOVE_ALL_MESSAGE_FROM_GROUP',
        groupId: 'ABCDE123435',
      },
    )
    expect(testReducer.ABCDE123435.length).toBe(0)
  })
  it('ADD GROUP CHAT : add empty new group', () => {
    const testReducer = messagesReducer(
      {},
      {
        type: 'CREATE_NEW_GROUP_MESSAGES',
        groupId: 'ABCDE123435',
      },
    )
    expect(testReducer.ABCDE123435.length).toBe(0)
  })
  it.skip('SET all group messages', () => {
    const testAllReducer = messagesReducer(
      {},
      {
        type: 'SET_ALL_GROUP_MESSAGES',
        store: initialFakeState,
      },
    )
    console.log(testAllReducer)
    expect(testAllReducer.ABCDE123435.length).toBe(2)
  })
})
