import { createReducer } from '../../lib/ReducerHelper'

const initialState = {
  user: false,
  authorized: false,
  country: false,
  number: false,
}

const authReducer = createReducer(initialState, {
  RESET_AUTH: () => initialState,
})

export default authReducer
