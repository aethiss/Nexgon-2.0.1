/* eslint-disable no-undef */
import configureStore from '../../lib/ConfigureStore'

import { loginRequest, resetLogin } from '../AuthActions'

const store = configureStore({
  auth: {
    user: false,
  },
})

describe('Auth Actions', () => {
  it('Login Request', () => {
    expect(store.getState().auth.user).toBe('')
    store.dispatch(loginRequest())
    expect(store.getState().auth.user.name).toBe('Enzo Dono')
    expect(store.getState().auth.authorized).toBe(true)
    store.dispatch(resetLogin())
    expect(store.getState().auth.authorized).toBe(false)
  })
})
