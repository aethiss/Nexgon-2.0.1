/* eslint-disable no-undef */
import configureStore from '../../lib/ConfigureStore'

import { facebookLoginRequest, resetLogin, setLogin, registerNewUser } from '../AuthActions'
import { facebookLoginManager } from '../../../libs/FacebookSDK'
import { setUserAuthenticated } from '../../../libs/Storage/Handlers/Auth'

const store = configureStore({
  auth: {
    user: {},
    authenticated: false,
  },
})

// mock FbHelper
jest.mock('../../../libs/FacebookSDK')

// mock Storage
jest.mock('../../../libs/Storage/Handlers/Auth')

let isValidUser = true

const FBfakeUser = {
  email: 'aethiss@gmail.com',
  id: '1522353421192808',
  picture: {
    data: {
      is_silhouette: false,
      width: 50,
      url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/',
      height: 50,
    },
  },
  name: 'Enzo D\'Onofrio',
}

facebookLoginManager.mockImplementation(() =>
  new Promise((resolve, reject) => {
    if (isValidUser) {
      return resolve(FBfakeUser)
    }
    return reject(new Error('bad user'))
  }))

setUserAuthenticated.mockImplementation(() => new Promise(resolve => resolve(true)))

describe('Auth Actions', () => {
  describe('Login Request ', () => {
    it('login request', () => {
      expect.assertions(1)
      return store.dispatch(facebookLoginRequest())
        .then((data) => {
          expect(data)
            .toMatchObject(FBfakeUser)
        })
    })
    it('login error', () => {
      isValidUser = false
      return store.dispatch(facebookLoginRequest())
        .catch((data) => {
          expect(data.name)
            .toBe('Error')
          expect(data.message)
            .toBe('Error: bad user')
        })
    })
    it('reset login', () => {
      store.dispatch(resetLogin())
      expect(store.getState().auth.authorized).toBe(false)
      expect(store.getState().auth.user).toMatchObject({})
    })
    it('expect Auth -> authorized = register after facebook request', () => {
      isValidUser = true
      const newStore = configureStore()
      expect.assertions(3)
      return newStore.dispatch(facebookLoginRequest())
        .then(() => {
          expect(newStore.getState().auth.user).toMatchObject(FBfakeUser)
          expect(newStore.getState().auth.authorized).toBe(true)
          expect(newStore.getState().auth.isNewUser).toBe(true)
        })
    })
  })
  describe('Register User', () => {
    it('register new user', () => {
      const registerStore = configureStore()
      registerStore.dispatch(setLogin({ name: 'Enzo', fb: '111333' }, true))
      expect.assertions(3)
      return registerStore.dispatch(registerNewUser('004465322', { name: 'uk', some: 'bla' }))
        .then(() => {
          expect(registerStore.getState().auth.isNewUser).toBe(false)
          expect(registerStore.getState().auth.user).toMatchObject({
            name: 'Enzo',
            fb: '111333',
          })
          expect(registerStore.getState().auth.phone).toMatch('004465322')
        })
    })
  })
})
