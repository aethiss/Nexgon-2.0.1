/* eslint-disable no-undef */
// import 'react-native'

import React from 'react'
import renderer from 'react-test-renderer'

// import { shallow } from 'enzyme'
// import configureStore from 'redux-mock-store'

import Debugger from '../Debugger'

const DebuggerComponent = Debugger.WrappedComponent

// const middlewares = [] // you can mock any middlewares here if necessary
// const mockStore = configureStore(middlewares)

const initialState = {
  user: false,
}

describe('<Debugger>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DebuggerComponent {...initialState} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('Enzyme Shallow renders as expected', () => {
  //   const wrapper = shallow(
  //     <Debugger />,
  //     { context: { store: mockStore(initialState) } },
  //   )
  //   expect(wrapper.dive()).toMatchSnapshot()
  // })
})
