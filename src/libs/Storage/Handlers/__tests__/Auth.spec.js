/* eslint-disable import/first,no-undef */
import { setUserAuthenticated, getUserFromStorage } from '../Auth'

jest.mock('../../AsyncStorage')
import { _getStorageItem, _setStorageItem } from '../../AsyncStorage'

const fakeAuth = {
  user: {
    email: 'test@gmail.com',
    id: '11122211111',
    picture: {
      data: {
        is_silhouette: false,
        width: 50,
        url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/',
        height: 50,
      },
    },
    name: 'Enzo D\'Onofrio',
  },
  authorized: true,
  country: {
    name: 'United Kingdom',
    native: 'United Kingdom',
    phone: '44',
    continent: 'EU',
    capital: 'London',
    currency: 'GBP',
    languages: [
      'en',
    ],
    emoji: '🇬🇧',
    emojiU: 'U+1F1EC U+1F1E7',
  },
  number: false,
  isNewUser: false,
  phone: '0044234324',
}

_getStorageItem.mockImplementation(() => new Promise(resolve => resolve(fakeAuth)))
_setStorageItem.mockImplementation((key, value) =>
  new Promise((resolve, reject) => {
    try {
      JSON.stringify(value)
    } catch (err) {
      reject(new Error(err))
    } finally {
      resolve({ key, save: true })
    }
  }))

describe('Authorization storage manager', () => {
  describe('Save User into storage manager', () => {
    it('save to localStorage Autenticated User', () => {
      expect.assertions(2)
      return setUserAuthenticated(fakeAuth)
        .then((data) => {
          expect(data.key).toMatch('auth')
          expect(data.saved).toBe(true)
        })
    })
    it('Error on Save on storage', () => {
      // TODO :(
    })
  })
  describe('get user from storage', () => {
    it('getUserFromStorage', () => {
      expect.assertions(2)
      return getUserFromStorage()
        .then((data) => {
          expect(data.user.name).toMatch('Enzo D\'Onofrio')
          expect(data.isNewUser).toBe(false)
        })
    })
  })
})
