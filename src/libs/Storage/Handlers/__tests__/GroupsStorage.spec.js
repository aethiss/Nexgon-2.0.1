/* eslint-disable no-undef,import/imports-first,import/first,prefer-promise-reject-errors */

import { mergeNewGroup } from '../Groups'

jest.mock('../../AsyncStorage')
import { _getStorageItem, _setStorageItem } from '../../AsyncStorage'

describe('@Groups local storage', () => {
  const newGroup = {
    groupId: '1234567890ABCDEFGH',
    name: 'ZeroOne',
    visible: true,
    inviteOnly: false,
    notification: 0,
    image: 'https://unsplash.it/150/?random',
    created_at: Date.now(),
  }

  it('Save/merge new group on empty storage', () => {
    _getStorageItem.mockImplementation(() =>
      new Promise(resolve => resolve(null)))
    _setStorageItem.mockImplementation((key, value) =>
      new Promise(resolve => resolve(JSON.parse(value))))
    expect.assertions(2)
    return mergeNewGroup(newGroup).then((e) => {
      expect(e.length).toBe(1)
      expect(typeof e).toBe('object')
    })
  })

  it('Save/Merge new group to existent storage', () => {
    const fakeGroupList = [newGroup]
    _getStorageItem.mockImplementation(() =>
      new Promise(resolve => resolve(JSON.stringify(fakeGroupList))))
    _setStorageItem.mockImplementation((key, value) =>
      new Promise(resolve => resolve(JSON.parse(value))))
    expect.assertions(2)
    return mergeNewGroup(newGroup).then((e) => {
      expect(e.length).toBe(2)
      expect(typeof e).toBe('object')
    })
  })

  it('Save/merge new group ERROR', () => {
    _getStorageItem.mockImplementation(() =>
      new Promise((resolve, reject) => reject({ error: 'cannot save group storage' })))
    expect.assertions(1)
    return mergeNewGroup(newGroup).catch(e =>
      expect(e).toMatchObject({ error: 'cannot save group storage' }))
  })
})
