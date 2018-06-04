import { createReducer } from '../../lib/ReducerHelper'

const initialState = {
  user: '',
  authorized: false,
  country: false,
  number: false,
}

const authReducer = createReducer(initialState, {
  RESET_AUTH: () => initialState,
  SET_AUTH: (currentState, { user }) => (
    {
      ...currentState,
      authorized: true,
      user: { ...user },
    }
  ),
})

export default authReducer
