/* eslint-disable no-undef */
import configureStore from '../../lib/ConfigureStore'

import { facebookLoginRequest, resetLogin } from '../AuthActions'
import { facebookLoginManager } from '../../../libs/FacebookSDK'

const store = configureStore({
  auth: {
    user: false,
    authenticated: false,
  },
})

// mock FbHelper
jest.mock('../../../libs/FacebookSDK')

let isValidUser = true

facebookLoginManager.mockImplementation(() =>
  new Promise((resolve, reject) => {
    if (isValidUser) {
      return resolve({
        email: 'aethiss@gmail.com',
        id: '1522353421192808',
        picture: {
          data: {
            is_silhouette: false,
            width: 50,
            url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1522353421192808&height=50&width=50&ext=1528801485&hash=AeSYuZUP3NoY8ZKj',
            height: 50,
          },
        },
        name: 'Enzo D\'Onofrio',
      })
    }
    return reject(new Error('bad user'))
  }))

describe('Auth Actions', () => {
  it('login request', () => {
    expect.assertions(1)
    return store.dispatch(facebookLoginRequest())
      .then((data) => {
        expect(data)
          .toMatchObject({
            email: 'aethiss@gmail.com',
            id: '1522353421192808',
            picture: {
              data: {
                is_silhouette: false,
                width: 50,
                url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1522353421192808&height=50&width=50&ext=1528801485&hash=AeSYuZUP3NoY8ZKj',
                height: 50,
              },
            },
            name: 'Enzo D\'Onofrio',
          })
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
    expect(store.getState().auth.authorized)
      .toBe(false)
  })
})
