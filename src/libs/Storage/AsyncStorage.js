/* eslint-disable no-underscore-dangle,prefer-promise-reject-errors */

/**
 * On iOS, AsyncStorage is backed by native code that stores small values in a serialized
 * dictionary and larger values in separate files.
 * On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.
 * */

import { AsyncStorage } from 'react-native'

// Persisting data:

export function _setStorageItem(key, value) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(value))
      .then((err) => {
        if (err) {
          reject(err)
        } else {
          resolve('set storage item')
        }
      })
      .catch(() => {
        reject('error set up storage item')
      })
  })
}

export function _getStorageItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((response, err) => {
        if (err) {
          reject('error on get item')
        } else {
          resolve(JSON.parse(response))
        }
      })
      .catch(() => {
        reject('error read storage item')
      })
  })
}

export function _deleteStorageItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key)
      .then((err) => {
        if (err) {
          reject('error on remove item')
        } else {
          resolve('removed store item')
        }
      })
      .catch(() => {
        reject('error read storage item')
      })
  })
}

// CLEAR ALL DATA (DEBUG ONLY)
export function _CLEARALLSTORAGE() {
  return new Promise((resolve, reject) => {
    AsyncStorage.clear()
      .then((err) => {
        if (err) {
          reject(err)
        } else {
          resolve('ALL STORAGE ITEMS CLEAR')
        }
      })
      .catch(() => {
        reject('error clear all storage item')
      })
  })
}
