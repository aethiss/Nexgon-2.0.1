import { facebookLoginManager } from '../../libs/FacebookSDK'

export function resetLogin() {
  return {
    type: 'RESET_AUTH',
  }
}

function setLogin(user) {
  return {
    type: 'SET_AUTH',
    user,
  }
}

// Handlers

export function facebookLoginRequest() {
  return dispatch => new Promise((resolve, reject) => {
    facebookLoginManager()
      .then((result) => {
        dispatch(setLogin(result))
        resolve(result)
      })
      .catch(err => reject(new Error(err)))
  })
}
