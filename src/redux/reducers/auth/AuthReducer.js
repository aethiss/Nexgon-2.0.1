import { createReducer } from '../../lib/ReducerHelper'

const initialState = {
  user: {},
  authorized: false,
  country: false,
  phone: false,
  isNewUser: true,
}

const authReducer = createReducer(initialState, {
  RESET_AUTH: () => initialState,
  SET_AUTH: (currentState, { user, authorized }) => (
    {
      ...currentState,
      user: { ...user },
      authorized,
    }
  ),
  SET_LOGGED_USER: (currentState, { user, phone, country }) => (
    {
      ...currentState,
      user: { ...user },
      phone,
      country: { ...country },
      isNewUser: false,
      authorized: true,
    }
  ),
})

export default authReducer
