import { facebookLoginManager } from '../../libs/FacebookSDK'
import { setUserAuthenticated } from '../../libs/Storage/Handlers/Auth'

export function resetLogin() {
  return {
    type: 'RESET_AUTH',
  }
}

export function setLogin(user, authorized) {
  return {
    type: 'SET_AUTH',
    user,
    authorized,
  }
}

function setRegisterUser(user, phone, country) {
  return {
    type: 'SET_LOGGED_USER',
    user,
    phone,
    country,
  }
}

// Handlers

export function facebookLoginRequest() {
  return dispatch => new Promise((resolve, reject) => {
    facebookLoginManager()
      .then((result) => {
        // TODO: check if already exist with real DB !
        dispatch(setLogin(result, true, false))
        resolve(result)
      })
      .catch(err => reject(new Error(err)))
  })
}

export function registerNewUser(phone, country) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    const saveAuth = {
      ...getState().auth,
      phone,
      country,
      isNewUser: false,
      authorized: true,
    }
    setUserAuthenticated(saveAuth)
      .then(() => {
        resolve(dispatch(setRegisterUser(getState().auth.user, phone, country)))
      })
      .catch(err => reject(new Error(err)))
  })
}

export function setUserFromStore(auth) {
  return (dispatch =>
    dispatch(setRegisterUser(auth.user, auth.phone, auth.country))
  )
}
