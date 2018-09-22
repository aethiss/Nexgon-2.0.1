/* eslint-disable no-undef */
import GroupsReducer from '../GroupsReducer'

describe('@GroupsReducer', () => {
  it('Add New Group', () => {
    const testReducer = GroupsReducer(
      [],
      {
        type: 'ADD_GROUP',
        group: { position: 0, groupid: 'skjasdh234', groupName: 'ZeroOne' },
      },
    )
    expect(testReducer).toMatchObject([{ position: 0, groupid: 'skjasdh234', groupName: 'ZeroOne' }])
  })
  it('Remove Group', () => {
    const testReducer = GroupsReducer(
      [
        { position: 0, groupId: 'skjasdh234', groupName: 'ZeroOne' },
        { position: 1, groupId: 'skjsa2h111', groupName: 'ZeroOne' },
      ],
      {
        type: 'REMOVE_GROUP',
        group: { position: 0, groupId: 'skjasdh234', groupName: 'ZeroOne' },
      },
    )
    expect(testReducer).toMatchObject([{ position: 1, groupId: 'skjsa2h111', groupName: 'ZeroOne' }])
  })
})
