import { _getStorageItem, _setStorageItem } from '../AsyncStorage'

// eslint-disable-next-line import/prefer-default-export
export function mergeNewGroup(group) {
  let groupList = []

  return new Promise((resolve, reject) => {
    _getStorageItem('groups').then((res) => {
      if (res === null) { // empty storage key
        groupList = [group]
      } else {
        groupList = JSON.parse(res)
        groupList.push(group)
      }
      _setStorageItem('groups', JSON.stringify(groupList)).then(() => {
        resolve(groupList)
      })
        .catch(err => reject(new Error(err)))
    })
      .catch(err => reject(new Error(err)))
  })
}
