import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers'


export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    ...initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )

  if (module && module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
