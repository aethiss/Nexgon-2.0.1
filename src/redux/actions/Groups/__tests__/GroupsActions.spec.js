/* eslint-disable no-undef */
import configureStore from '../../../lib/ConfigureStore'
import * as actions from '../GroupsActions'

const snapshot = action => expect(action).toMatchSnapshot()

describe('[Actions Groups]', () => {
  it('Delete Group)', () => {
    const store = configureStore()
    const group1 = {
      groupId: '1234567890ABCDEFGH',
      name: 'ZeroOne',
      visible: true,
      inviteOnly: false,
      notification: 2,
      image: 'https://unsplash.it/150/?random',
      create_at: Date.now(),
    }
    const group2 = {
      groupId: '0987654321GFDSA',
      name: 'Amici',
      visible: false,
      inviteOnly: true,
      notification: 5,
      image: 'https://unsplash.it/150/?random',
      create_at: Date.now(),
    }
    const group = {
      groupId: '0987654321GFDSA',
      name: 'Amici',
      visible: false,
      inviteOnly: true,
      notification: 5,
      image: 'https://unsplash.it/150/?random',
      create_at: Date.now(),
    }
    snapshot(actions.removeGroup(group))
    store.dispatch(actions.createNewGroup(group1))
    store.dispatch(actions.createNewGroup(group2))
    store.dispatch(actions.removeGroup(group))
    expect(store.getState().groups.length).toBe(1)
  })

  it('Create New Group', () => {
    const store = configureStore()
    const newgroup = {
      name: 'Amici',
      visible: false,
      inviteOnly: true,
      image: 'https://unsplash.it/150/?random',
    }
    snapshot(actions.createNewGroup(newgroup))
    store.dispatch(actions.createNewGroup(newgroup))
    expect(store.getState().groups.length).toBe(1)
    expect(store.getState().groups[0].notification).toBe(0)
  })
  it('Error on group creation', () => {
    const store = configureStore()
    const newgroup = {
      name: '',
      visible: false,
      inviteOnly: true,
      image: 'https://unsplash.it/150/?random',
    }
    snapshot(actions.createNewGroup(newgroup))
    store.dispatch(actions.createNewGroup(newgroup))
    expect(store.getState().groups.length).toBe(0)
  })
})
