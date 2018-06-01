/* eslint-disable no-undef */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Debugger from '../Debugger'

describe('<Debugger>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Debugger />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
