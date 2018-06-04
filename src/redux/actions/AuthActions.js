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

export function loginRequest() {
  // TODO: just mock atm!
  return setLogin({ name: 'Enzo Dono', lastLogin: 'yesterday' })
}
