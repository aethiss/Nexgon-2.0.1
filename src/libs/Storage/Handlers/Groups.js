import { _getStorageItem, _setStorageItem } from '../AsyncStorage'

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
        .catch(err => reject(err))
    })
      .catch(err => reject(err))
  })
}
