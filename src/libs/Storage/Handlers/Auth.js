import { _getStorageItem, _setStorageItem } from '../AsyncStorage'

export function setUserAuthenticated(auth) {
  return new Promise((resolve, reject) => {
    _setStorageItem('auth', JSON.stringify(auth))
      .then(() => resolve({ key: 'auth', saved: true }))
      .catch(err => reject(new Error(err)))
  })
}

export function getUserFromStorage() {
  return new Promise((resolve, reject) => {
    _getStorageItem('auth')
      .then(data => resolve(data))
      .catch(err => reject(new Error(err)))
  })
}
