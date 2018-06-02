/* eslint-disable no-undef */
// import 'react-native'

import React from 'react'
// import renderer from 'react-test-renderer' DEPRECATED
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import Debugger from '../Debugger'

const middlewares = [] // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares)
configure({ adapter: new Adapter() })

const initialState = {
  auth: {
    user: false,
  },
}

describe('<Debugger>', () => {
  // DEPRECATED
  // it.skip('react-test-renderer', () => {
  //   const tree = renderer.create(<DebuggerComponent {...initialState} />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  it('Enzyme Shallow renders as expected', () => {
    const wrapper = shallow(
      <Debugger />,
      { context: { store: mockStore(initialState) } },
    )
    expect(wrapper.dive()).toMatchSnapshot()
  })
})
