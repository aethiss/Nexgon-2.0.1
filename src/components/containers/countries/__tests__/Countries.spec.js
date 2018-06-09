/* eslint-disable no-undef */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Countries from '../Countries'

configure({ adapter: new Adapter() })

describe('Register', () => {
  describe('renders', () => {
    it('default render', () => {
      const wrapper = shallow(<Countries onSelectCountry={jest.fn()} />)
      expect(wrapper.dive()).toMatchSnapshot()
    })
  })
})
